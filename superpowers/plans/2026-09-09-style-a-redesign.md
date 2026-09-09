# Style A 单色极简重构 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 VitePress 站点从蓝色渐变卡片风格重构为单色极简风格，并把首页 129 条导航链接从 3 列大卡片改为按分类分区的 3 列紧凑行式布局。

**Architecture:** 全部改动集中在主题层：`custom.css` 换掉品牌色 token（VitePress 的 `--vp-c-brand-1` 同时驱动链接、行内代码、侧栏激活态，改一个变量即可让全站转单色），`NavSite.vue` 整体重写为分区行式布局，`sync-gitbook-sidebar.py` 让侧栏顶层分组默认折叠。不改任何 submodule 内容，不改导航路由。

**Tech Stack:** VitePress 1.6.3、Vue 3 `<script setup>`、原生 CSS（无预处理器、无 CSS 框架）、Bun 作为包管理器、Python 3 用于侧栏生成脚本。

**Spec:** `superpowers/specs/2026-09-09-style-a-redesign-design.md`

## Global Constraints

- 设计 token 精确值以 spec 第 4 节为准，不得自行调色
- 响应式断点固定为：`≥1360px` 三列、`900–1359px` 两列、`<900px` 单列
- 首页容器 `max-width: 1440px`；文档页正文限宽保持现有 `48rem`，不得改动
- 排序统一用模块级 `Intl.Collator('en', { sensitivity: 'base' })` 单例，不得在比较函数内新建 Collator
- 禁止改动：`navItems.js` 的数据内容、顶部导航文案 `Home / Gitbook / About`、Algolia 配置、`deploy.yml`、两个 submodule 内的任何文件
- `.vp-doc a` 的 `text-decoration: underline` 是单色方案的可访问性前提，不得移除
- 无测试框架，每个任务的验证 = `bun run docs:build` 通过 + 浏览器实测

---

### Task 1: 单色设计 token 与文档页排版

**Files:**
- Modify: `docs/.vitepress/theme/custom.css`

**Interfaces:**
- Consumes: 无
- Produces: CSS 自定义属性 `--vp-c-brand-1/2/3`、`--vp-c-brand-soft`、`--vp-c-divider`、`--vp-c-shadow`、`--vp-font-family-base`，供 Task 2 的 `NavSite.vue` 直接引用（组件内不再自定义颜色）

- [ ] **Step 1: 替换 `:root` 与 `.dark` 的品牌色块**

把文件开头的蓝色 token 块整体替换为墨色：

```css
:root {
  --vp-c-brand-1: #111111;
  --vp-c-brand-2: #333333;
  --vp-c-brand-3: #555555;
  --vp-c-brand-soft: rgba(17, 17, 17, 0.06);
  --vp-c-brand-1-alpha: rgba(17, 17, 17, 0.14);
  --vp-c-divider: #ebebeb;
  --vp-c-shadow: rgba(0, 0, 0, 0.06);
  --vp-font-family-base: 'Inter', ui-sans-serif, system-ui, -apple-system,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.dark {
  --vp-c-brand-1: #f2f2f2;
  --vp-c-brand-2: #d4d4d4;
  --vp-c-brand-3: #a3a3a3;
  --vp-c-brand-soft: rgba(255, 255, 255, 0.08);
  --vp-c-brand-1-alpha: rgba(255, 255, 255, 0.16);
  --vp-c-divider: #232323;
  --vp-c-shadow: rgba(0, 0, 0, 0.4);
}
```

- [ ] **Step 2: 去掉 h1 的居中与渐变**

删除现有的 `.VPContent .content-container h1` 渐变规则块，替换为：

```css
/* Doc page title: left-aligned, single ink colour, no gradient */
.VPDoc .content-container h1 {
  text-align: left;
  letter-spacing: -0.035em;
  margin-bottom: 0.75rem;
}
```

- [ ] **Step 3: 滚动条改中性色**

把 `::-webkit-scrollbar-thumb` 的 `background` 从 `var(--vp-c-brand-1)` 改为 `var(--vp-c-text-3)`，
hover 态从 `var(--vp-c-brand-2)` 改为 `var(--vp-c-text-2)`。纯黑滚动条在浅色模式下过重。

- [ ] **Step 4: 引入 Inter 字体**

在 `docs/.vitepress/config.mts` 的 `head` 数组中追加（放在现有 favicon 两条之后）：

```ts
['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap' }]
```

- [ ] **Step 5: 构建验证**

Run: `bun run docs:build`
Expected: 构建成功，输出 `build complete`，无报错

- [ ] **Step 6: 提交**

```bash
git add docs/.vitepress/theme/custom.css docs/.vitepress/config.mts
git commit -m "style: replace blue brand tokens with monochrome ink palette"
```

---

### Task 2: `NavSite.vue` 重写为分区行式布局

**Files:**
- Modify: `docs/.vitepress/components/NavSite.vue`（整体重写）

**Interfaces:**
- Consumes: Task 1 产出的 CSS token；`../data/navItems.js` 导出的 `navItems`，每项形状为
  `{ id: string, title: string, description: string, url: string, category: string, icon: string }`
- Produces: 无对外接口（`docs/index.md` 通过全局注册的 `<NavSite />` 使用，标签名不变）

- [ ] **Step 1: 写模块级排序与分组逻辑**

置于 `<script setup>` 顶部，模块作用域内只算一次，不进响应式系统：

```js
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { navItems } from '../data/navItems.js'

const collator = new Intl.Collator('en', { sensitivity: 'base' })
const byCategoryThenTitle = (a, b) =>
  collator.compare(a.category, b.category) || collator.compare(a.title, b.title)

const sortedItems = [...navItems].sort(byCategoryThenTitle)
const categories = [...new Set(sortedItems.map((i) => i.category))]
const totalByCategory = sortedItems.reduce((acc, i) => {
  acc[i.category] = (acc[i.category] || 0) + 1
  return acc
}, Object.create(null))
```

- [ ] **Step 2: 写响应式状态与筛选**

```js
const query = ref('')
const activeCategory = ref('ALL')
const searchInput = ref(null)
const failedIcons = reactive(new Set())

const groups = computed(() => {
  const q = query.value.trim().toLowerCase()
  const wanted = activeCategory.value === 'ALL' ? categories : [activeCategory.value]
  const out = []
  for (const category of wanted) {
    const items = sortedItems.filter(
      (i) =>
        i.category === category &&
        (!q ||
          i.title.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q))
    )
    if (items.length) out.push({ category, total: totalByCategory[category], items })
  }
  return out
})

const shownCount = computed(() => groups.value.reduce((n, g) => n + g.items.length, 0))
const isFiltered = computed(() => Boolean(query.value.trim()) || activeCategory.value !== 'ALL')
```

- [ ] **Step 3: 移除原来的全局字母键劫持，不注册任何全局快捷键**

原实现把任意字母/数字键都抢去聚焦搜索框。**不要**替换成 `/` 或 `⌘K` —— 实测中这两个键已被
Algolia DocSearch 全局占用且 DocSearch 优先响应，站内搜索的优先级高于首页筛选。筛选框 sticky
常驻页面顶部，点击即可，因此不注册全局 `keydown`：

```js
// No global hotkey here on purpose: Algolia DocSearch already owns '/' and
// Cmd/Ctrl-K for site-wide search, and that is the more useful action. This
// filter is sticky at the top of the page, so clicking it is enough.
const onSearchKeydown = (event) => {
  if (event.key !== 'Escape') return
  query.value = ''
  searchInput.value?.blur()
}
```

同时不要 `onMounted` autofocus，避免移动端弹出键盘并抢走页面焦点。因此 `vue` 的导入只需
`{ ref, reactive, computed }`，不需要 `onMounted` / `onUnmounted`。

- [ ] **Step 4: 写模板**

```vue
<template>
  <div class="nav">
    <header class="nav-hero">
      <h1>Logic</h1>
      <p>云原生 / DevOps / 平台工程。这里是我的知识库和常用入口。</p>
      <div class="nav-hero-meta">
        <a href="https://github.com/logic3579" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/gitbook/README">Gitbook</a>
        <span>{{ sortedItems.length }} 个常用入口 · {{ categories.length }} 个分类</span>
      </div>
    </header>

    <div class="nav-filter">
      <input
        ref="searchInput"
        v-model="query"
        type="search"
        class="nav-search"
        :placeholder="`搜索 ${sortedItems.length} 个链接…`"
        aria-label="Search navigation links"
        @keydown="onSearchKeydown"
      />
      <div class="nav-chips" role="group" aria-label="Filter by category">
        <button
          :class="{ active: activeCategory === 'ALL' }"
          :aria-pressed="activeCategory === 'ALL'"
          @click="activeCategory = 'ALL'"
        >
          全部
        </button>
        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: activeCategory === category }"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </div>
    </div>

    <section v-for="group in groups" :key="group.category" class="nav-group">
      <h2>{{ group.category }} <span>{{ group.total }}</span></h2>
      <div class="nav-rows">
        <a
          v-for="item in group.items"
          :key="item.id"
          class="nav-row"
          :href="item.url"
          :title="`${item.title} — ${item.description}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            v-if="item.icon && !failedIcons.has(item.id)"
            class="nav-icon"
            :src="item.icon"
            alt=""
            loading="lazy"
            @error="failedIcons.add(item.id)"
          />
          <span v-else class="nav-icon nav-icon-fallback" aria-hidden="true">
            {{ item.title.charAt(0).toUpperCase() }}
          </span>
          <b>{{ item.title }}</b>
          <i>{{ item.description }}</i>
          <em aria-hidden="true">↗</em>
        </a>
      </div>
    </section>

    <p v-if="!groups.length" class="nav-empty">没有匹配 “{{ query }}” 的链接</p>

    <footer class="nav-total">
      {{ isFiltered ? `显示 ${shownCount} / ${sortedItems.length} 条` : `共 ${sortedItems.length} 条 · ${categories.length} 个分类` }}
    </footer>
  </div>
</template>
```

- [ ] **Step 5: 写 scoped 样式**

关键约束：容器 1440px、列数用 `--nav-cols`、行内单行 ellipsis、无卡片边框与阴影。

```css
.nav { max-width: var(--vp-layout-max-width); margin: 0 auto; padding: 0 1.5rem 4rem; --nav-cols: 1 }
@media (min-width: 900px)  { .nav { --nav-cols: 2 } }
@media (min-width: 1360px) { .nav { --nav-cols: 3; padding: 0 2rem 4rem } }
@media (max-width: 768px)  { .nav { padding: 0 1rem 3rem } }

.nav-hero { padding: 3.25rem 0 2rem }
.nav-hero h1 { font-size: 1.85rem; font-weight: 600; letter-spacing: -.035em; margin: 0 0 .6rem }
.nav-hero p { margin: 0; max-width: 44ch; color: var(--vp-c-text-2); font-size: .92rem }
.nav-hero-meta { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.1rem; font-size: .78rem; color: var(--vp-c-text-3) }
.nav-hero-meta a { color: inherit; text-decoration: none; border-bottom: 1px solid var(--vp-c-divider); padding-bottom: 1px }
.nav-hero-meta a:hover { color: var(--vp-c-text-1); border-color: var(--vp-c-text-1) }

.nav-filter { position: sticky; top: var(--vp-nav-height); z-index: 5; padding: .7rem 0; background: var(--vp-c-bg); border-bottom: 1px solid var(--vp-c-divider) }
.nav-search { width: 100%; background: transparent; border: 0; outline: 0; font-size: 1rem; color: var(--vp-c-text-1); padding: .1rem 0 .55rem }
.nav-search::placeholder { color: var(--vp-c-text-3) }
.nav-search::-webkit-search-cancel-button { filter: grayscale(1); opacity: .5 }

.nav-chips { display: flex; flex-wrap: wrap; gap: .1rem }
.nav-chips button { background: none; border: 0; cursor: pointer; padding: .25rem .55rem; border-radius: 5px; font-size: .76rem; color: var(--vp-c-text-3) }
.nav-chips button:hover { color: var(--vp-c-text-1); background: var(--vp-c-bg-soft) }
.nav-chips button.active { color: var(--vp-c-bg); background: var(--vp-c-text-1); font-weight: 500 }

.nav-group { padding: 1.9rem 0 .25rem }
.nav-group h2 { display: flex; align-items: center; gap: .6rem; margin: 0 0 .8rem; font-size: .68rem; font-weight: 600; line-height: 1; text-transform: uppercase; letter-spacing: .1em; color: var(--vp-c-text-3); border: 0 }
.nav-group h2 span { font-weight: 400; letter-spacing: .05em }
.nav-group h2::after { content: ''; flex: 1; height: 1px; background: var(--vp-c-divider) }

.nav-rows { display: grid; grid-template-columns: repeat(var(--nav-cols), minmax(0, 1fr)); column-gap: 2rem }
.nav-row { display: flex; align-items: center; gap: .65rem; min-width: 0; margin: 0 -.5rem; padding: .45rem .5rem; border-radius: 6px; color: inherit; text-decoration: none }
.nav-row:hover { background: var(--vp-c-bg-soft) }
.nav-icon { flex: 0 0 18px; width: 18px; height: 18px; border-radius: 4px; object-fit: contain }
.nav-icon-fallback { display: grid; place-items: center; font-size: .6rem; font-weight: 600; color: var(--vp-c-text-3); background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider) }
.nav-row b { flex: 0 0 auto; max-width: 60%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: .855rem; font-weight: 500 }
.nav-row i { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-style: normal; font-size: .795rem; color: var(--vp-c-text-3) }
.nav-row em { flex: 0 0 auto; font-style: normal; font-size: .75rem; color: var(--vp-c-text-3); opacity: 0 }
.nav-row:hover em { opacity: 1 }

.nav-empty { padding: 4rem 0; color: var(--vp-c-text-3) }
.nav-total { margin-top: 2rem; padding: 2.5rem 0 0; border-top: 1px solid var(--vp-c-divider); font-size: .75rem; color: var(--vp-c-text-3) }
```

`.nav-filter` 的 `top` 用 `var(--vp-nav-height)` 而非硬编码 52px，跟随 VitePress 自身导航高度。

三列档用 `padding: 0 2rem` 而非 1.5rem：VitePress 导航栏容器宽 `calc(--vp-layout-max-width - 64px)`
= 1376px，2rem 内边距让首页内容盒同样落在 1376px，与导航栏左右边缘精确对齐。

- [ ] **Step 6: 构建验证**

Run: `bun run docs:build`
Expected: 构建成功。若出现 `Element is missing end tag`，检查模板里是否有裸角括号

- [ ] **Step 7: 提交**

```bash
git add docs/.vitepress/components/NavSite.vue
git commit -m "feat(nav): rewrite home navigation as A-Z grouped compact rows"
```

---

### Task 3: 侧栏顶层分组默认折叠

**Files:**
- Modify: `scripts/sync-gitbook-sidebar.py:86`（section 的 `collapsed`）与 `scripts/sync-gitbook-sidebar.py:122`（`finalize` 的 top_level 分支）
- Regenerate: `docs/.vitepress/data/gitbook.ts`

**Interfaces:**
- Consumes: `docs/gitbook/SUMMARY.md`
- Produces: `docs/.vitepress/data/gitbook.ts` 导出的 `gitbookSidebar`，被 `config.mts` 的 `sidebar['/gitbook/']` 消费。结构不变，只有 `collapsed` 的布尔值变化

- [ ] **Step 1: 改 section 默认折叠**

`parse_summary` 里构造 `current_section` 处：

```python
            current_section = {
                "text": heading.group(1),
                "collapsed": True,
                "items": [],
            }
```

- [ ] **Step 2: 改顶层节点默认折叠**

`finalize` 函数里：

```python
    def finalize(node: dict, top_level: bool = False) -> dict:
        if "items" in node and node["items"]:
            node["items"] = [finalize(c, top_level=False) for c in node["items"]]
            node["collapsed"] = True
        return node
```

`top_level` 参数至此不再影响结果，但保留签名以免调用点报错。

- [ ] **Step 3: 重新生成侧栏数据**

Run: `python3 scripts/sync-gitbook-sidebar.py`
Expected: 输出 `Wrote /Users/logic/Projects/logic3579.github.io/docs/.vitepress/data/gitbook.ts (N top-level entries)`

- [ ] **Step 4: 确认生成结果里不再有展开态**

Run: `rg -c 'collapsed: false' docs/.vitepress/data/gitbook.ts`
Expected: 无匹配（rg 退出码 1）

- [ ] **Step 5: 构建验证**

Run: `bun run docs:build`
Expected: 构建成功

- [ ] **Step 6: 提交**

```bash
git add scripts/sync-gitbook-sidebar.py docs/.vitepress/data/gitbook.ts
git commit -m "fix(sidebar): collapse gitbook top-level groups by default"
```

---

### Task 4: 浏览器实测验证

**Files:**
- 无改动（若发现偏差则回到 Task 1–3 修正）

**Interfaces:**
- Consumes: Task 1–3 的全部产出
- Produces: 无

- [ ] **Step 1: 启动 dev server**

Run: `bun run docs:dev --port 5199`
Expected: 输出 `Local: http://localhost:5199/`

- [ ] **Step 2: 验证 1440px 视口下为 3 列**

在浏览器把视口设为 1440px 宽，打开 `http://localhost:5199/`，执行：

```js
getComputedStyle(document.querySelector('.nav')).getPropertyValue('--nav-cols')
```

Expected: `3`

再确认容器宽度与行数：

```js
({
  container: document.querySelector('.nav').getBoundingClientRect().width,
  rows: document.querySelectorAll('.nav-row').length,
  height: document.querySelector('.nav').scrollHeight
})
```

Expected: `container` ≈ 1440、`rows` = 129、`height` 约 2800–2900px

- [ ] **Step 3: 验证 1280px 视口下降为 2 列**

把视口设为 1280px 宽，重新执行 Step 2 的第一条断言
Expected: `2`

- [ ] **Step 4: 验证 A–Z 排序**

```js
[...document.querySelectorAll('.nav-group h2')].map(h => h.firstChild.textContent.trim())
```

Expected: `["AI","CloudPlatform","CNCF","Community","Crypto","DevOps","Feeds","Mirrors","Netdisc","OnlineTools","Others","ScienceSurf"]`

- [ ] **Step 5: 验证无蓝色残留**

```js
getComputedStyle(document.documentElement).getPropertyValue('--vp-c-brand-1').trim()
```

Expected: 浅色模式 `#111111`；切到深色模式后 `#f2f2f2`

- [ ] **Step 6: 验证键盘行为**

- 页面空白处按 `/` → 打开 Algolia 站内搜索弹窗（这是预期行为，不是首页筛选框）
- 在筛选框内输入 `docker` → 只剩 1 行；按 Escape → 清空且失焦
- 在筛选框内输入字母 `a` → 正常输入，不被拦截
- 组件不应注册任何 `document` 级 `keydown` 监听

- [ ] **Step 7: 验证文档页**

打开 `http://localhost:5199/gitbook/README`：
- h1 左对齐、无渐变、单色
- 左侧栏顶层分组默认折叠
- 正文限宽仍为 48rem：`getComputedStyle(document.querySelector('.VPDoc .content-container')).maxWidth` → `768px`
- 浅色/深色两种模式下无对比度问题

- [ ] **Step 8: 确认无控制台错误**

浏览器控制台应无 error 级输出

---

### Task 5: 同步 `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md`

**Interfaces:**
- Consumes: Task 1–3 的实际改动结果
- Produces: 无

- [ ] **Step 1: 修正过期的分类清单**

`CLAUDE.md` 当前记录的 `navItems.js` 分类是
`AI, Blog, CloudPlatform, CNCF, Community, Dev, Mirrors, Monitoring, News, Other, Platform, Recommended, Tools`，
与实际数据不符。改为实际的 12 个分类：

```
AI, CloudPlatform, CNCF, Community, Crypto, DevOps, Feeds, Mirrors, Netdisc, OnlineTools, Others, ScienceSurf
```

- [ ] **Step 2: 更新架构描述**

把 `NavSite component` 与 `Theme styles` 两条描述改为反映新实现：
`NavSite.vue` 是 A–Z 分区的紧凑行式布局（3 列 / 1440px 容器 / 1360px 断点），
`custom.css` 是单色墨色 token 而非蓝色品牌色 + 渐变 h1。

- [ ] **Step 3: 在 Key Patterns 中记录排序规则**

新增一条：分类与条目统一用 `Intl.Collator('en', { sensitivity: 'base' })` 做 A–Z 排序，
中文条目自然落在各分区末尾。

- [ ] **Step 4: 在 Known Issues & Past Fixes 追加本次重构记录**

包含：选定 Style A 的原因、密度实测数据（列宽/高度/截断率三组对照）、
以及被推翻的「仅标题更紧凑」假设。

- [ ] **Step 5: 提交**

```bash
git add CLAUDE.md
git commit -m "docs: sync CLAUDE.md with monochrome redesign and fix stale category list"
```

---

## Self-Review

**Spec coverage:** spec 第 4 节 token → Task 1；第 5.1 节组件重写 → Task 2；第 5.2 节响应式 → Task 2 Step 5；第 5.3 节文档页与侧栏折叠 → Task 1 Step 2 与 Task 3；第 7 节 7 条验证项 → Task 4 Step 2–8。spec 第 5.4 节「无需改动」的三处（`Layout.vue`、`index.md`、`theme/index.js`）在本计划中确实无任务触及，符合预期。

**Placeholder scan:** 无 TBD / TODO；每个改代码的步骤都给出了完整代码或完整命令与期望输出。

**Type consistency:** `sortedItems`、`categories`、`totalByCategory`、`groups`、`shownCount`、`isFiltered`、`failedIcons`、`searchInput`、`focusSearch`、`onGlobalKeydown`、`onSearchKeydown` 在 Task 2 各步骤间命名一致，且模板引用的名字与 Step 1–3 定义的一致。`--nav-cols` 在 Step 5 的定义与 Task 4 Step 2 的断言一致。
