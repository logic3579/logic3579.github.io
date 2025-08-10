[![Deploy VitePress site to Pages](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml)

# Introduction

## Vitepress

```bash
# Create new project
bun install vitepress
bun vitepress init
# Exist project
cd exist-dir
bun install

# Run / Build
bun run docs:dev
bun run docs:build
```

## Git submodules

```bash
# Add submodule
git submodule add https://github.com/logic3579/logic3579.git docs/about
git submodule add https://github.com/logic3579/gitbook.git docs/gitbook
git add -A
git commit -m "Add submodule-repo as a submodule"
git push origin main

# Check status
git submodule status

# Update submodule
git submodule update --remote [docs/gitbook]
git add -A
git commit -m "Update submodule xxx"
git push origin main

# Clone
git clone --recurse-submodules https://github.com/logic3579/logic3579.github.io
```
