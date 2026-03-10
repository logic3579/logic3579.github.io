#!/usr/bin/env python3
"""
Regenerate docs/.vitepress/data/gitbook.ts from docs/gitbook/SUMMARY.md
so the VitePress sidebar always matches the gitbook submodule structure.
"""
from pathlib import Path
import re
import json

REPO_ROOT = Path(__file__).resolve().parent.parent
SUMMARY_PATH = REPO_ROOT / "docs/gitbook/SUMMARY.md"
OUT_PATH = REPO_ROOT / "docs/.vitepress/data/gitbook.ts"


def parse_summary(content: str) -> list:
    lines = content.splitlines()
    root_items: list = []
    sections: list = []
    current_section: dict | None = None
    stack: list[tuple[int, dict]] = []  # (depth, node)

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
        link = "/gitbook/" + bullet.group(3).removesuffix(".md")
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
        for i, child in enumerate(val):
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
    content = SUMMARY_PATH.read_text()
    tree = parse_summary(content)
    out = "export const gitbookSidebar = " + js_value(tree, 0) + "\n"
    OUT_PATH.write_text(out)
    print(f"Wrote {OUT_PATH} ({len(tree)} top-level entries)")


if __name__ == "__main__":
    main()
