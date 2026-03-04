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

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`): pushes to `main` trigger build with Bun 1.2.15 and deploy to GitHub Pages. Checkout uses `submodules: recursive` and `fetch-depth: 0`.
