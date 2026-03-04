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

- **VitePress config**: `docs/.vitepress/config.mts` — site settings, nav, sidebar, Algolia search
- **Sidebar data**: `docs/.vitepress/data/gitbook.ts` — 400+ item hierarchical sidebar (mirrors gitbook submodule structure)
- **Nav data**: `docs/.vitepress/data/navItems.js` — 90+ external link items with categories (AI, CNCF, DevOps, etc.)
- **Custom component**: `docs/.vitepress/components/NavSite.vue` — interactive card-grid navigation with search/filter, used on the home page (`docs/index.md`)
- **Theme customization**: `docs/.vitepress/theme/index.js` (registers NavSite component) and `docs/.vitepress/theme/custom.css` (brand colors, scrollbar, h1 gradient, outline styling)
- **Static assets**: `docs/public/` (favicon SVG/PNG)

## Key Patterns

- Content is Markdown in submodules; this repo handles only site config, theme, and navigation
- `navItems.js` entries follow the shape: `{ id, title, description, url, category, icon }`
- `gitbook.ts` sidebar entries must match actual file paths in the `docs/gitbook/` submodule
- Dead links are intentionally ignored (`ignoreDeadLinks: true`) since submodule content may lag behind sidebar definitions
- Search is Algolia (appId: `DV059DHAUJ`, index: `yakir`)

## Submodule Workflow

Never modify submodule files directly in this repo. To fix content in `docs/gitbook/`:

1. Edit in the source repo (`/Users/logic/Projects/gitbook`), commit and push
2. Back in this repo: `git submodule update --remote docs/gitbook`
3. Commit the updated submodule reference

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`): pushes to `main` trigger build with Bun 1.2.15 and deploy to GitHub Pages. Checkout uses `submodules: recursive` and `fetch-depth: 0`.

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
