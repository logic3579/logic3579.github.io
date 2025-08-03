[![Deploy VitePress site to Pages](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/logic3579/logic3579.github.io/actions/workflows/deploy.yml)

# Introduction

## Vitepress

```bash
# Install
bun i vitepress

# Init
bun vitepress init

# Run
bun run docs:dev

# Build
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

# Single update
# way1
cd docs/gitbook
git checkout main
git pull
cd ../../
git add docs/gitbook && git commit -m "Update submodule gitbook to xxx"
git push origin main
# way2
git submodule update --remote docs/gitbook
git add docs/gitbook && git commit -m "Update submodule gitbook to xxx"
git push origin main

# Batch update
git submodule foreach git checkout main
git submodule foreach git pull origin main
git add -A
git commit -m "Update all submodules to latest"
git push origin main

# Clone
#git clone https://github.com/logic3579/logic3579.github.io
#git submodule init
#git submodule update
git clone --recurse-submodules https://github.com/logic3579/logic3579.github.io
```
