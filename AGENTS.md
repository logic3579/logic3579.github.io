# AGENTS.md

Guidance for coding agents working in this repository.

This file is for the **VitePress site shell** (`logic3579.github.io`). Content under `docs/gitbook/` and `docs/about/` is in Git submodules — each has its own conventions (gitbook keeps its own `AGENTS.md`). Do not edit submodule files from this repo.

## Project Overview

VitePress technical knowledge site deployed to GitHub Pages at https://logic3579.github.io. Aggregates two Git submodules into a hub for cloud-native, DevOps, and platform engineering topics, plus a home-page navigation index.

## Build Commands

```bash
bun install           # Install dependencies
bun run docs:dev      # Local dev server with hot reload
bun run docs:build    # Build static site to docs/.vitepress/dist/
bun run docs:preview  # Preview production build locally
```

Package manager is **Bun** (lockfile: `bun.lock`). No test or lint configuration exists. CI pins Bun `1.2.15` via `oven-sh/setup-bun@v2`.

## Git Submodules

- `docs/gitbook` → https://github.com/logic3579/gitbook (main knowledge base)
- `docs/about` → https://github.com/logic3579/logic3579 (personal profile)

```bash
git clone --recurse-submodules https://github.com/logic3579/logic3579.github.io
git submodule update --remote [docs/gitbook]   # Pull latest submodule content
```

## Architecture

- **VitePress config**: `docs/.vitepress/config.mts` — site settings, nav, sidebar, Algolia search, `cleanUrls: true`, `lastUpdated: true`, markdown code theme (github-light/github-dark)
- **Sidebar data**: `docs/.vitepress/data/gitbook.ts` — hierarchical sidebar for `/gitbook/` routes, **generated from** `docs/gitbook/SUMMARY.md` via `scripts/sync-gitbook-sidebar.py` (do not hand-edit after submodule updates)
- **Nav data**: `docs/.vitepress/data/navItems.js` — ~130 external link items across 12 categories: AI, CloudPlatform, CNCF, Community, DevOps, Feeds, Finance, Mirrors, Netdisc, OnlineTools, Others, ScienceSurf
- **NavSite component**: `docs/.vitepress/components/NavSite.vue` — monochrome row-dense navigation index on the home page (`docs/index.md`). One section per category; each entry is `18px favicon + title + muted description + hover arrow`. Titles `font-weight: 600`, descriptions `--vp-c-text-2` (WCAG AA). 3 columns at ≥1360px, 2 at 900–1359px, 1 below; container tracks `--vp-layout-max-width` (1440px) with a 2rem gutter. Sticky search + category filter; icon fallback to first letter
- **Theme entry**: `docs/.vitepress/theme/index.js` — extends DefaultTheme and registers `NavSite` globally. No custom `Layout.vue`
- **Theme styles**: `docs/.vitepress/theme/custom.css` — monochrome ink tokens (`--vp-c-brand-1` is `#111111` light / `#f2f2f2` dark), Inter base font, left-aligned doc h1, outline hierarchy, sidebar child indent + Introduction peer styling (see Key Patterns)
- **Sidebar sync script**: `scripts/sync-gitbook-sidebar.py` — parses `SUMMARY.md` into a nested tree, resolves path mismatches, marks groups `collapsed: true`, writes the TypeScript sidebar export
- **Static assets**: `docs/public/` — `logic-site.svg` (favicon + navbar logo; own `prefers-color-scheme`) and `logic-site.png` (512px light-variant raster). Navbar `<img>` uses CSS invert when OS scheme and `html.dark` disagree
- **Home page**: `docs/index.md` — `layout: page` with `<NavSite />`
- **Design notes** (not site pages): `superpowers/specs/` and `superpowers/plans/` live outside `docs/` on purpose — anything under `docs/` becomes a VitePress route

## Key Patterns

- **UI language is English.** `lang: 'en-US'` in `config.mts`; strings in config, `NavSite.vue`, and the theme stay English. Exception: `navItems.js` keeps a linked site's own Chinese `title`/`description` when those are proper nouns (`百炼`, `哔哩哔哩`, `阿里云盘`, …) — never translate them
- This repo owns site config, theme, and navigation only; Markdown content lives in submodules
- `navItems.js` shape: `{ id, title, description, url, category, icon }`
- Keep categories and entries alphabetically sorted by title (English first, Chinese last). `NavSite.vue` also sorts with module-level `Intl.Collator('en', { sensitivity: 'base' })` and computes per-category counts once at module scope
- **Finance** (formerly Crypto) covers exchanges, wallets, banks, and remittance (e.g. Binance, HashKey, Wise, iFAST)
- Do not add global `keydown` shortcuts on the home page: Algolia DocSearch already owns `/` and `⌘K`/`Ctrl+K`
- `NavSite.vue` focuses the filter on mount only behind `matchMedia('(hover: hover) and (pointer: fine)')` with `focus({ preventScroll: true })`
- `gitbook.ts` paths must match files in `docs/gitbook/`; dead links are ignored (`ignoreDeadLinks: true`) because submodule content may lag
- Search: Algolia (`appId: DV059DHAUJ`, index: `yakir`)
- Top nav: Home (`/`), Gitbook (`/gitbook/README`), About (`/about/README`)
- **Sidebar indent**: VitePress wraps lone leaf links (Introduction) in a title-less level-0 shell. Indent children only with `.VPSidebarItem.level-0 > .item + .items` — a bare `> .items` rule indents Introduction. Promote those wrapped leaves with `.level-0 > .items:first-child > …` so they match level-0 title weight. Empty `items: []` on sidebar data does not survive VitePress site-data serialization

## Submodule Workflow

Never modify submodule files in this repo. To update gitbook content:

1. Edit in the source repo (`/Users/logic/Projects/gitbook` or equivalent), commit and push
2. Here: `git submodule update --remote docs/gitbook`
3. Regenerate the sidebar: `python3 scripts/sync-gitbook-sidebar.py`
4. Commit the submodule pointer and any changed `gitbook.ts`

## Deployment

`.github/workflows/deploy.yml`: pushes to `main` build with Bun 1.2.15 and deploy to GitHub Pages. Checkout uses `submodules: recursive` and `fetch-depth: 0`. Uses `oven-sh/setup-bun@v2` and `actions/upload-pages-artifact@v4`.

## Gotchas

- **Angle brackets in Markdown**: bare `<StatusName>` (e.g. `<Pending SQL Execution>`) breaks Vue template compilation. Wrap in backticks. Seen in `gitbook/Misc/JiraCDflow/README.md`
- **Contrast**: muted UI copy should use `--vp-c-text-2` (not `--vp-c-text-3`) for WCAG AA at small sizes. Search placeholder and decorative hover arrow may stay on `text-3`
- **Doc content width**: `custom.css` sets `max-width: 48rem`, but pages with an aside render at 688px via VitePress’s `.VPDoc.has-aside .content-container` rule — pre-existing, leave as-is
- **Nav item counts**: prefer “~N items / 12 categories” or re-count from `navItems.js`; do not hardcode stale totals in PRs without checking

## Historical context (optional)

Monochrome home redesign (2026-09): design/plan under `superpowers/`. Shipped layout is 3 columns / 1440px container; Breadcrumb + custom `Layout.vue` were removed as dead code. Older nav/CSS/deploy cleanup notes from 2026-03 live in git history if needed.
