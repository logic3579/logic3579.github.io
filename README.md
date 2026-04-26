[![Deploy VitePress site to Pages](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml)

# Logic's Site

A static knowledge site built with [VitePress](https://vitepress.dev/) and published on [GitHub Pages](https://pages.github.com/).

## Prerequisites

- **Node.js** `v25.9.0`
- **Bun** `1.3.13`

The repo is developed and checked against these versions. If yours differ, run `bun install` and the scripts below anyway; for exact dependency resolution, use `bun.lock`.

## Tech stack

| Area | Notes |
|------|--------|
| Docs / app shell | [VitePress](https://vitepress.dev/) `^1.6.3` (direct dependency in `package.json`) |
| Bundler | [Vite](https://vitejs.dev/) `5.4.x` (pulled in by VitePress; see `bun.lock`) |
| UI runtime | [Vue](https://vuejs.org/) `3.5.x` (pulled in by VitePress) |
| Runtime / PM | [Bun](https://bun.sh/) as in Prerequisites |

Patch versions of Vue and Vite follow VitePress and the lockfile; they may change when you upgrade dependencies.

- Site config: `docs/.vitepress/config.mts`
- Source docs: Markdown under `docs/`
- Some content comes from Git submodules (see below)

## Local development

```bash
bun install

# Dev server
bun run docs:dev

# Production build
bun run docs:build

# Preview the production build
bun run docs:preview
```

### New VitePress project (reference)

```bash
bun add -d vitepress
bunx vitepress init
```

## Git submodules

```bash
# Add submodules
git submodule add https://github.com/logic3579/logic3579.git docs/about
git submodule add https://github.com/logic3579/gitbook.git docs/gitbook
git add -A
git commit -m "Add submodule-repo as a submodule"
git push origin main

# Status
git submodule status

# Update submodules
git submodule update --remote [docs/gitbook]
git add -A
git commit -m "Update submodule xxx"
git push origin main

# Clone with submodules
git clone --recurse-submodules https://github.com/logic3579/logic3579.github.io
```

## Links

- Repository: [logic3579/logic3579.github.io](https://github.com/logic3579/logic3579.github.io)
- Deploy workflow: `.github/workflows/deploy.yml` (status badge at the top)
