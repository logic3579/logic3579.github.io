# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VitePress-based technical knowledge site deployed to GitHub Pages at https://logic3579.github.io. Aggregates content from two Git submodules into a unified documentation hub for cloud-native, DevOps, and platform engineering topics.

## Build Commands

```bash
bun install              # Install dependencies
bun run docs:dev         # Local dev server with hot reload
bun run docs:build       # Build static site to docs/.vitepress/dist/
bun run docs:preview     # Preview production build locally
```

Package manager is **Bun** (lockfile: `bun.lock`). No test or lint configuration exists.

## Git Submodules

Content lives in two submodules — not in this repo directly:

- `docs/gitbook` → https://github.com/logic3579/gitbook (main knowledge base)
- `docs/about` → https://github.com/logic3579/logic3579 (personal profile)

```bash
git clone --recurse-submodules https://github.com/logic3579/logic3579.github.io
git submodule update --remote [docs/gitbook]   # Pull latest submodule content
```

## Architecture

- **VitePress config**: `docs/.vitepress/config.mts` — site settings, nav, sidebar, Algolia search, `cleanUrls: true`, `lastUpdated: true`, markdown code theme (github-light/github-dark)
- **Sidebar data**: `docs/.vitepress/data/gitbook.ts` — hierarchical sidebar for `/gitbook/` routes, **generated from** `docs/gitbook/SUMMARY.md` via `scripts/sync-gitbook-sidebar.py` so it always matches the gitbook submodule structure (do not edit `gitbook.ts` by hand after submodule updates)
- **Nav data**: `docs/.vitepress/data/navItems.js` — 129 external link items across 12 categories (AI, CloudPlatform, CNCF, Community, Crypto, DevOps, Feeds, Mirrors, Netdisc, OnlineTools, Others, ScienceSurf)
- **NavSite component**: `docs/.vitepress/components/NavSite.vue` — monochrome row-dense navigation index used on the home page (`docs/index.md`). One section per category, each entry a single line of `18px favicon + title + muted description + hover arrow`. 3 columns at ≥1360px, 2 at 900–1359px, 1 below; container tracks `--vp-layout-max-width` (1440px) with a 2rem gutter so it lines up with the navbar. Sticky search + category filter, icon fallback to first letter
- **Theme entry**: `docs/.vitepress/theme/index.js` — extends DefaultTheme and registers the NavSite component globally. There is no custom `Layout.vue`: `extends: DefaultTheme` already supplies the default layout, so the theme is just the token stylesheet plus one global component
- **Theme styles**: `docs/.vitepress/theme/custom.css` — monochrome ink tokens (`--vp-c-brand-1` is `#111111` light / `#f2f2f2` dark), Inter as base font, left-aligned single-colour doc h1, neutral scrollbar, outline (TOC) hierarchy for h2/h3/h4
- **Sidebar sync script**: `scripts/sync-gitbook-sidebar.py` — Python 3 script that parses `SUMMARY.md` into nested tree, resolves paths (handles kebab-case and case-insensitive mismatches), marks every group `collapsed: true`, outputs TypeScript sidebar export
- **Static assets**: `docs/public/` (favicon `books.svg` and `books.png`)
- **Home page**: `docs/index.md` — uses `layout: page` with `<NavSite />` component

## Key Patterns

- Content is Markdown in submodules; this repo handles only site config, theme, and navigation
- `navItems.js` entries follow the shape: `{ id, title, description, url, category, icon }`
- Categories in `navItems.js` are sorted alphabetically by title (English entries first, Chinese entries last within each category)
- `NavSite.vue` sorts categories and entries with a single module-level `Intl.Collator('en', { sensitivity: 'base' })`; base sensitivity gives case-insensitive A–Z and naturally pushes CJK titles to the end of each section. Sorting and per-category counts are computed once at module scope, not inside a computed
- Do not add global `keydown` shortcuts in home-page components: Algolia DocSearch already owns `/` and `⌘K`/`Ctrl+K` for site-wide search and wins the race
- `gitbook.ts` sidebar entries must match actual file paths in the `docs/gitbook/` submodule
- Dead links are intentionally ignored (`ignoreDeadLinks: true`) since submodule content may lag behind sidebar definitions
- Search is Algolia (appId: `DV059DHAUJ`, index: `yakir`)
- Nav has three top-level links: Home (`/`), Gitbook (`/gitbook/README`), About (`/about/README`)

## Submodule Workflow

Never modify submodule files directly in this repo. To fix content in `docs/gitbook/`:

1. Edit in the source repo (`/Users/logic/Projects/gitbook`), commit and push
2. Back in this repo: `git submodule update --remote docs/gitbook`
3. **Sync sidebar to match gitbook structure**: run `python3 scripts/sync-gitbook-sidebar.py` so `docs/.vitepress/data/gitbook.ts` is regenerated from `docs/gitbook/SUMMARY.md`. All gitbook pages in this site must stay aligned with the gitbook submodule structure.
4. Commit the updated submodule reference and any changed `gitbook.ts`

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`): pushes to `main` trigger build with Bun 1.2.15 and deploy to GitHub Pages. Checkout uses `submodules: recursive` and `fetch-depth: 0`. Uses `oven-sh/setup-bun@v2` and `actions/upload-pages-artifact@v4`.

## Known Issues & Past Fixes

### VitePress build fails on angle brackets in Markdown (fixed)
Markdown files using `<StatusName>` syntax (e.g. `<Pending SQL Execution>`) cause Vue template compilation errors (`Element is missing end tag`). Fix: wrap in backticks to make them inline code. Affected file: `gitbook/Misc/JiraCDflow/README.md`.

### NavSite.vue audit fixes (2026-03-04)
- **Memory leak**: global `keydown` listener was never removed — added `onUnmounted` cleanup
- **Icon fallback broken**: `handleIconError` hid `<img>` but `v-else` never triggered — now tracks failed icons via `reactive(new Set())` by item ID
- **No a11y**: cards were `<div @click>` — changed to `<a>` tags with `rel="noopener noreferrer"`; tabs have `role="tab"` + `aria-pressed`; search has `aria-label`
- **No empty state**: added "No matching results found" when filters return nothing
- **Unnecessary reactivity**: removed `ref()` wrapper on static `navItems` import
- **Animation split**: moved `fadeInUp` from global `custom.css` into component `<style scoped>`
- **Duplicate import**: removed redundant `<script setup>` NavSite import in `index.md` (already registered globally in `theme/index.js`)

### navItems.js data fixes (2026-03-04)
- Category typo: `"Mirros"` → `"Mirrors"` (10 items)
- HTTP URLs upgraded to HTTPS (`yuan316.com`, `lanqiuzhi.live`)
- Filled in ~25 empty or title-duplicating descriptions

### custom.css cleanup (2026-03-04)
- Removed dead `.outline-marker` styling block (was overridden by `display: none` below it)
- Removed `.nav-card` animation (moved into NavSite.vue scoped styles)
- Comments normalized to English

### deploy.yml cleanup (2026-03-04)
- Removed commented-out Node.js setup and alternative package manager comments
- Upgraded `oven-sh/setup-bun` v1 → v2, `actions/upload-pages-artifact` v3 → v4

### navItems.js updates (2026-03-19)
- **New entries**: added OpenRouter (`openrouter.ai`) and Mimo (`mimo.xiaomi.com`) to AI category
- **Alphabetical sorting**: all categories sorted alphabetically by title (English first, Chinese last)
- **Icon fixes**: replaced broken icon URLs for OpenAI (→ `cdn.oaistatic.com` CDN), Mimo (→ Xiaomi CDN), OneDrive (→ SharePoint CDN SVG)
- **Known broken icons**: `bwh88.net` (404, no favicon available), `tool.lu` (204, site returns no content), `cjting.me` and `sysctl-explorer.net` (DNS fails, sites offline)

### navItems.js updates (2026-04-09)
- **New entry**: added NVIDIA Build (`build.nvidia.com`) to AI category

### Monochrome redesign (2026-09-09)
Branch `redesign/style-a-minimal`. Design doc: `superpowers/specs/2026-09-09-style-a-redesign-design.md`;
plan: `superpowers/plans/2026-09-09-style-a-redesign.md`. Note these live outside `docs/`
because `docs/` is the VitePress source root — Markdown placed there becomes a site page.

**Why this layout.** Four directions were mocked up in a browser (monochrome minimal, bento,
command palette, docs-native) and the monochrome row-dense one was chosen. Density was then
measured against the real 129-item dataset:

| Layout | Column width | Page height | Truncated descriptions |
| --- | --- | --- | --- |
| 2 columns / 1080px container (old baseline) | 516px | 3460px | 24/129 (19%) |
| 3 columns / 1200px container | 360px | 2831px | 66/129 (51%) |
| **3 columns / 1440px container (shipped)** | **435px** | **2986px** | **49/129 (38%)** |

Container width is what makes 3 columns viable — at 1200px the column loss pushes truncation
past half the entries. The 1360px breakpoint exists because a 1440px container gets clamped to
about 1230px on a 1280px viewport, which sends truncation back up.

**Overturned assumption:** "3 columns, title only" is not shorter than "3 columns with
descriptions" — both measure 2831px in the mockup, because dropping the description does not
change row height. Its only benefit was removing ellipses, so it was not adopted.

**Global hotkeys removed.** The original plan bound `/` and `⌘K` to focus the home filter.
Browser testing showed Algolia DocSearch already owns both and wins, so `NavSite.vue` now
registers no `document`-level listener at all. This also replaced the old behaviour where any
letter key grabbed focus into the search box, and the mount-time autofocus.

**Doc reading width clarified.** `custom.css` says `max-width: 48rem`, but doc pages actually
render at 688px: VitePress ships `.VPDoc.has-aside .content-container[data-v-*] { max-width: 688px }`,
which outranks that selector. Pre-existing, left as-is; only the misleading comment was fixed.

**Removed the dead breadcrumb layer.** `Breadcrumb.vue` had never rendered on a single page —
`Layout.vue` tried to forward slots with `v-for="(_, name) in useSlots()"`, but as the root theme
layout it is instantiated with no slots, so the loop body never ran. Dead since `e4e3e61`
(2026-03-05), confirmed by 0 hits across all 180 built pages. Since `Layout.vue` existed only to
inject that breadcrumb, and `extends: DefaultTheme` already supplies the default layout, both
files were deleted rather than repaired — the approved design has no breadcrumb on doc pages.
