# Style A 单色极简重构 — 设计文档

**日期:** 2026-09-09
**分支:** `redesign/style-a-minimal`
**状态:** 已确认，待实现

> 文档位置说明：本仓库的 `docs/` 是 VitePress 的源目录，任何放进去的 Markdown 都会变成站点页面。
> 因此设计文档放在仓库根的 `superpowers/specs/`，而非 skill 默认的 `docs/superpowers/specs/`。

---

## 1. 目标

把站点从当前的「蓝色品牌色 + 渐变标题 + 大卡片网格」重构为单色极简风格（Linear / Vercel
那一路），核心是解决首页 129 条链接被塞进 3 列大卡片导致的超长滚动和低可扫视性。

**成功标准**

1. 首页整页高度从 3460px 降到约 2831px（−18%），且描述截断率不超过 36%
2. 首页链接按分类分区，分类与条目均按 A–Z 排序，无需筛选即可扫视全站
3. 文档页去掉居中渐变 h1，与首页共用同一套单色 token
4. `bun run docs:build` 通过，无新增控制台错误

## 2. 当前状态与问题

站点是 VitePress 1.6.3 + 默认主题微调，内容来自两个 submodule（`docs/gitbook`、`docs/about`）。

| 位置 | 问题 |
| --- | --- |
| `NavSite.vue` | 129 条链接 3 列大卡片，`ALL` 状态下无分区标题，只能靠 tab 筛选 |
| `NavSite.vue` | 卡片 `align-items: center`，同行标题基线错开 |
| `NavSite.vue` | 每张卡片重复渲染分类标签（129 次冗余） |
| `NavSite.vue` | 全局 `keydown` 监听把任意字母键抢去聚焦搜索框；挂载时 autofocus |
| `NavSite.vue` | 搜索图标是 emoji 🔍 |
| `custom.css` | h1 居中 + 蓝色渐变，与左对齐正文冲突；渐变手法偏旧 |
| `custom.css` | 蓝色滚动条 |
| `sync-gitbook-sidebar.py` | 顶层分组 `collapsed: False`，侧栏全展开成低对比度链接墙 |

## 3. 已确认的决策

以下四项经 mockup 实测对比后由用户确认，实现时不再改动：

1. **风格方向：A（单色极简 · 行式密集）** —— 纯黑白灰，无渐变、无阴影、无大圆角卡片；
   链接压缩成 `18px favicon + 标题 + 灰色描述` 的单行
2. **首页密度：3 列 / 容器 1440px** —— 实测列宽 464px、整页 2831px、描述截断 47/129（36%）。
   对照：3 列 / 容器 1200px 会让列宽掉到 360px、截断率 51%，不可接受
3. **响应式断点：视口 ≥ 1360px 三列，900–1359px 两列，< 900px 单列** —— 因为视口 1280px 时
   1440 容器会被夹到约 1230px，截断率回升到 47%
4. **排序规则：A–Z 统一** —— 分类按钮、分区标题、分区内条目全部使用
   `localeCompare(b, 'en', { sensitivity: 'base' })`；中文条目自然落在各分区末尾

**实测数据（129 条真实数据，浏览器内测量）**

| 方案 | 列宽 | 整页高度 | 描述截断 |
| --- | --- | --- | --- |
| 2 列 / 容器 1080（现状基线） | 516px | 3460px | 24/129（19%） |
| 3 列 / 容器 1200 | 360px | 2831px | 66/129（51%） |
| **3 列 / 容器 1440（采纳）** | **464px** | **2831px** | **47/129（36%）** |

另记录一条被推翻的假设：「3 列仅标题」并不比「3 列带描述」更矮，实测高度同为 2831px，
因为去掉描述不改变行高。它唯一收益是消除省略号，故未采纳。

## 4. 设计 token

替换 `docs/.vitepress/theme/custom.css` 中的蓝色品牌色为中性墨色。VitePress 的
`--vp-c-brand-1` 同时驱动链接、行内代码、侧栏激活态，因此改这一个变量即可让全站转为单色。

| Token | 浅色 | 深色 |
| --- | --- | --- |
| `--vp-c-brand-1` | `#111111` | `#f2f2f2` |
| `--vp-c-brand-2` | `#333333` | `#d4d4d4` |
| `--vp-c-brand-3` | `#555555` | `#a3a3a3` |
| `--vp-c-brand-soft` | `rgba(17,17,17,0.06)` | `rgba(255,255,255,0.08)` |
| `--vp-c-divider` | `#ebebeb` | `#232323` |

**可访问性前提：** VitePress 默认 `.vp-doc a` 已带 `text-decoration: underline`，所以正文链接
转为墨色后仍有下划线作为可点击性提示，不依赖颜色区分。这条不能改。

**字体：** 使用 `Inter`，通过 `--vp-font-family-base` 覆盖，并保留系统字体栈兜底。
不引入第二个显示字体。

## 5. 组件结构

### 5.1 `NavSite.vue` 重写

```
<div class="nav">
  <header class="nav-hero">        名字 + 一句简介 + meta 链接（GitHub / 专题数 / 链接总数）
  <div class="nav-filter">         sticky：搜索框 + A–Z 分类按钮
  <section class="nav-group">      每分类一个，分区标题带条目数
    <div class="nav-rows">          grid，列数由 --nav-cols 控制
      <a class="nav-row">           favicon | 标题 | 描述 | hover 箭头
  <div class="nav-empty">          无结果时
  <footer class="nav-total">       共 N 条 · M 个分类
```

**计算属性**

- `collator` —— 模块级单例 `Intl.Collator('en', { sensitivity: 'base' })`，避免每次比较都新建
- `sortedItems` —— `navItems` 按 `(category, title)` 排序，模块级计算一次，不放进组件响应式
- `groups` —— 按当前分类筛选 + 搜索词过滤后，分组为 `{ category, count, items }[]`
- `categories` —— 去重后 A–Z

**行为变更**

| 项 | 现状 | 改为 |
| --- | --- | --- |
| 键盘聚焦 | 任意字母键抢焦点 | 不注册任何全局快捷键（见下方「已推翻的方案」） |
| 挂载 | `autofocus` 搜索框 | 不自动聚焦（避免移动端弹键盘、避免抢走页面焦点） |
| Escape | 清空 + blur | 保留 |
| 分类标签 | 每张卡片渲染一次 | 移除，改为分区标题 |
| 搜索图标 | emoji 🔍 | 移除（占位文案已说明用途） |
| 描述截断 | 2 行 clamp | 单行 ellipsis + `title` 属性提供完整描述 |

**已推翻的方案：`/` 与 `⌘K` 聚焦筛选框**

最初设计为按 `/` 或 `⌘K` 聚焦首页筛选框。实测发现 VitePress 的 Algolia DocSearch 已经全局占用
了这两个键用于站内搜索，且 DocSearch 优先响应。站内搜索比首页筛选更重要，不应被抢占；而筛选框
本身 sticky 常驻页面顶部，点击即可。因此最终不注册任何全局 `keydown` 监听 —— 既消除冲突，也少
一个监听器。仅保留输入框自身的 Escape 清空。

**可访问性**

- 分类按钮用 `<button aria-pressed>` 包在 `role="group" aria-label="Filter by category"` 里。
  不用 `role="tab"` —— 没有对应的 tabpanel，用 tab 语义是错的
- 搜索框 `type="search"` + `aria-label`
- 行是 `<a target="_blank" rel="noopener noreferrer">`
- 分区标题用 `<h2>`，页面 `<h1>` 只有 hero 里那一个

### 5.2 响应式

```css
.nav { max-width: var(--vp-layout-max-width); padding: 0 1.5rem; --nav-cols: 1 }
.nav-rows { grid-template-columns: repeat(var(--nav-cols), minmax(0, 1fr)); }

@media (min-width: 900px)  { .nav { --nav-cols: 2 } }
@media (min-width: 1360px) { .nav { --nav-cols: 3; padding: 0 2rem } }
@media (max-width: 768px)  { .nav { padding: 0 1rem } }
```

容器用 `var(--vp-layout-max-width)`（1440px）而非硬编码。三列档的内边距是 **2rem 而非 1.5rem**：
VitePress 导航栏容器是 `calc(--vp-layout-max-width - 64px)` = 1376px，只有 2rem 内边距能让首页
内容盒同样落在 1376px 上，与导航栏左右边缘精确对齐；1.5rem 会宽出 16px 造成肉眼可见的错位。

实测结果：列轨道宽 435px、描述截断 49/129（38%），与 mockup 预估的 36% 相差 2 个百分点，
来自这 16px 的内边距差异。

### 5.3 文档页

- h1 改为左对齐、去渐变、`letter-spacing: -0.035em`
- 正文限宽保持现状 **48rem 不变**（mockup 里画的是 46rem，此处以现有实现为准，避免无意义改动）
- 右侧 outline 层级样式保留，颜色随 brand token 自动转为单色
- 侧栏顶层分组默认折叠：修改 `scripts/sync-gitbook-sidebar.py`，把 section 与顶层节点的
  `collapsed` 从 `False` 改为 `True`，然后重新生成 `docs/.vitepress/data/gitbook.ts`

### 5.4 无需改动

- `Layout.vue` / `Breadcrumb.vue` —— 已是中性配色，结构不变
- `docs/index.md` —— 保持 `layout: page` + `<NavSite />`；VitePress 的 `VPPage` 是无限宽裸
  div，宽度完全由组件控制，无需覆盖
- `theme/index.js` —— 组件注册方式不变

## 6. 明确不在范围内

- `navItems.js` 的数据内容（不增删链接、不改描述文案）
- 顶部导航文案 `Home / Gitbook / About`（改动会与 submodule 路由语义脱节）
- Algolia 搜索配置
- 两个 submodule 内的任何文件
- `deploy.yml`

## 7. 验证方式

1. `bun run docs:build` 通过
2. 浏览器实测首页：视口 1440px 下列数为 3、容器 1440px、整页高度约 2831px
3. 浏览器实测首页：视口 1280px 下列数降为 2
4. 分类按钮与分区标题顺序为
   `AI · CloudPlatform · CNCF · Community · Crypto · DevOps · Feeds · Mirrors · Netdisc · OnlineTools · Others · ScienceSurf`
5. 浅色 / 深色两种模式下首页与文档页均无对比度问题，无蓝色残留
6. 键盘：`/` 与 `⌘K` 仍归 Algolia 站内搜索；筛选框内 Escape 清空并失焦；输入字母不被拦截
7. 无控制台错误
