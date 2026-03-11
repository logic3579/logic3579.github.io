#!/usr/bin/env python3
"""
Regenerate docs/.vitepress/data/gitbook.ts from docs/gitbook/SUMMARY.md
so the VitePress sidebar always matches the gitbook submodule structure.

Uses SUMMARY.md for structure, order, and display titles. Resolves each
path to the actual file on disk so that renames (e.g. to kebab-case) are
handled even if SUMMARY.md lags: if the path from SUMMARY does not exist,
the script tries the same directory with kebab-case or case-insensitive
basename so links stay valid.
"""
from pathlib import Path
import re
import json

REPO_ROOT = Path(__file__).resolve().parent.parent
GITBOOK_ROOT = REPO_ROOT / "docs/gitbook"
SUMMARY_PATH = REPO_ROOT / "docs/gitbook/SUMMARY.md"
OUT_PATH = REPO_ROOT / "docs/.vitepress/data/gitbook.ts"


def _camel_to_kebab(name: str) -> str:
    """BuildTools -> build-tools, NodeJS -> node-js."""
    out: list[str] = []
    for i, c in enumerate(name):
        if c.isupper():
            if out and out[-1] != "-":
                out.append("-")
            out.append(c.lower())
        else:
            out.append(c)
    return "".join(out).strip("-")


def _collect_existing_paths() -> set[str]:
    """Set of paths under docs/gitbook without .md, normalized with /."""
    paths: set[str] = set()
    for p in GITBOOK_ROOT.rglob("*.md"):
        rel = p.relative_to(GITBOOK_ROOT)
        paths.add(str(rel.with_suffix("")).replace("\\", "/"))
    return paths


def resolve_path(summary_path: str, existing: set[str]) -> str:
    """
    Map SUMMARY path (no .md) to an actual path under docs/gitbook.
    If exact path exists, return it. Else try kebab-case basename and
    case-insensitive match in the same directory.
    """
    norm = summary_path.replace("\\", "/")
    if norm in existing:
        return norm
    parts = norm.split("/")
    if not parts:
        return norm
    parent = "/".join(parts[:-1])
    base = parts[-1]
    # Same dir: try kebab-case basename
    kebab = _camel_to_kebab(base)
    candidate = f"{parent}/{kebab}" if parent else kebab
    if candidate in existing:
        return candidate
    # Case-insensitive: find any file in same dir whose name matches
    prefix = parent + "/" if parent else ""
    lower_base = base.lower()
    for p in existing:
        if p.startswith(prefix):
            rest = p[len(prefix) :]
            if rest.lower() == lower_base or _camel_to_kebab(rest).lower() == kebab.lower():
                return p
    return norm


def parse_summary(content: str, existing_paths: set[str]) -> list:
    lines = content.splitlines()
    root_items: list = []
    sections: list = []
    current_section: dict | None = None
    stack: list[tuple[int, dict]] = []

    for raw in lines:
        heading = re.match(r"^##\s+(.+)$", raw)
        if heading:
            current_section = {
                "text": heading.group(1),
                "collapsed": False,
                "items": [],
            }
            sections.append(current_section)
            stack = []
            continue

        bullet = re.match(r"^(\s*)- \[(.+?)\]\(\./(.+?\.md)\)$", raw)
        if not bullet:
            continue

        indent = len(bullet.group(1)) // 2
        text = bullet.group(2)
        raw_path = bullet.group(3).removesuffix(".md")
        resolved = resolve_path(raw_path, existing_paths)
        link = "/gitbook/" + resolved
        item: dict = {"text": text, "link": link}

        def attach(container: list, depth: int, node: dict) -> None:
            while stack and stack[-1][0] >= depth:
                stack.pop()
            if stack:
                parent = stack[-1][1]
                parent.setdefault("items", []).append(node)
            else:
                container.append(node)
            stack.append((depth, node))

        if current_section is None:
            attach(root_items, indent, item)
        else:
            attach(current_section["items"], indent, item)

    def finalize(node: dict, top_level: bool = False) -> dict:
        if "items" in node and node["items"]:
            node["items"] = [finalize(c, top_level=False) for c in node["items"]]
            node["collapsed"] = False if top_level else True
        return node

    result: list = []
    for item in root_items:
        result.append(finalize(dict(item), top_level=True))
    for section in sections:
        section["items"] = [finalize(c) for c in section["items"]]
        result.append(section)
    return result


def js_value(val, indent: int = 0) -> str:
    pad = "    " * indent
    if isinstance(val, bool):
        return "true" if val else "false"
    if isinstance(val, str):
        return json.dumps(val)
    if isinstance(val, list):
        if not val:
            return "[]"
        lines = ["["]
        for child in val:
            lines.append(pad + "    " + js_value(child, indent + 1) + ",")
        lines.append(pad + "]")
        return "\n".join(lines)
    if isinstance(val, dict):
        parts = []
        for k, v in val.items():
            vstr = js_value(v, indent + 1)
            if "\n" in vstr:
                parts.append(f"{pad}    {k}: {vstr},")
            else:
                parts.append(f"{pad}    {k}: {vstr},")
        return "{\n" + "\n".join(parts) + "\n" + pad + "}"
    return str(val)


def main() -> None:
    existing = _collect_existing_paths()
    content = SUMMARY_PATH.read_text()
    tree = parse_summary(content, existing)
    out = "export const gitbookSidebar = " + js_value(tree, 0) + "\n"
    OUT_PATH.write_text(out)
    print(f"Wrote {OUT_PATH} ({len(tree)} top-level entries)")


if __name__ == "__main__":
    main()
