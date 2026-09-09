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
          :class="{ active: activeCategory === ALL }"
          :aria-pressed="activeCategory === ALL"
          @click="activeCategory = ALL"
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
      {{
        isFiltered
          ? `显示 ${shownCount} / ${sortedItems.length} 条`
          : `共 ${sortedItems.length} 条 · ${categories.length} 个分类`
      }}
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { navItems } from '../data/navItems.js'

const ALL = 'ALL'

// One collator instance, reused for every comparison. Base sensitivity gives
// case-insensitive A-Z ordering, and pushes CJK titles after Latin ones.
const collator = new Intl.Collator('en', { sensitivity: 'base' })

// navItems never changes, so sort and index it once at module scope rather
// than paying for it inside a computed.
const sortedItems = [...navItems].sort(
  (a, b) => collator.compare(a.category, b.category) || collator.compare(a.title, b.title)
)
const categories = [...new Set(sortedItems.map((item) => item.category))]
const totalByCategory = sortedItems.reduce((acc, item) => {
  acc[item.category] = (acc[item.category] || 0) + 1
  return acc
}, Object.create(null))

const query = ref('')
const activeCategory = ref(ALL)
const searchInput = ref(null)
const failedIcons = reactive(new Set())

const groups = computed(() => {
  const q = query.value.trim().toLowerCase()
  const wanted = activeCategory.value === ALL ? categories : [activeCategory.value]
  const result = []

  for (const category of wanted) {
    const items = sortedItems.filter(
      (item) =>
        item.category === category &&
        (!q ||
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q))
    )
    if (items.length) result.push({ category, total: totalByCategory[category], items })
  }
  return result
})

const shownCount = computed(() =>
  groups.value.reduce((count, group) => count + group.items.length, 0)
)
const isFiltered = computed(() => Boolean(query.value.trim()) || activeCategory.value !== ALL)

// No global hotkey here on purpose: Algolia DocSearch already owns '/' and
// Cmd/Ctrl-K for site-wide search, and that is the more useful action. This
// filter is sticky at the top of the page, so clicking it is enough.
const onSearchKeydown = (event) => {
  if (event.key !== 'Escape') return
  query.value = ''
  searchInput.value?.blur()
}
</script>

<style scoped>
/* Padding is 2rem so the content box lands on 1376px, matching the width of
   the VitePress navbar container (--vp-layout-max-width minus its 64px gutter). */
.nav {
  --nav-cols: 1;
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
}

@media (min-width: 900px) {
  .nav {
    --nav-cols: 2;
  }
}

@media (min-width: 1360px) {
  .nav {
    --nav-cols: 3;
    padding: 0 2rem 4rem;
  }
}

@media (max-width: 768px) {
  .nav {
    padding: 0 1rem 3rem;
  }
}

/* Hero */
.nav-hero {
  padding: 3.25rem 0 2rem;
}

.nav-hero h1 {
  margin: 0 0 0.6rem;
  font-size: 1.85rem;
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.nav-hero p {
  margin: 0;
  max-width: 44ch;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
}

.nav-hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.1rem;
  font-size: 0.78rem;
  color: var(--vp-c-text-3);
}

.nav-hero-meta a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1px;
  transition: color 0.15s, border-color 0.15s;
}

.nav-hero-meta a:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-1);
}

/* Sticky search + category filter */
.nav-filter {
  position: sticky;
  top: var(--vp-nav-height);
  z-index: 5;
  padding: 0.7rem 0;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.nav-search {
  display: block;
  width: 100%;
  padding: 0.1rem 0 0.55rem;
  background: transparent;
  border: 0;
  outline: 0;
  color: var(--vp-c-text-1);
  font-family: inherit;
  font-size: 1rem;
}

.nav-search::placeholder {
  color: var(--vp-c-text-3);
}

.nav-search::-webkit-search-cancel-button {
  filter: grayscale(1);
  opacity: 0.5;
}

.nav-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.1rem;
}

.nav-chips button {
  padding: 0.25rem 0.55rem;
  border: 0;
  border-radius: 5px;
  background: none;
  color: var(--vp-c-text-3);
  font-family: inherit;
  font-size: 0.76rem;
  cursor: pointer;
  transition: color 0.15s, background-color 0.15s;
}

.nav-chips button:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.nav-chips button.active {
  color: var(--vp-c-bg);
  background: var(--vp-c-text-1);
  font-weight: 500;
}

/* Category sections */
.nav-group {
  padding: 1.9rem 0 0.25rem;
}

.nav-group h2 {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 0.8rem;
  border: 0;
  padding: 0;
  color: var(--vp-c-text-3);
  font-size: 0.68rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.nav-group h2 span {
  font-weight: 400;
  letter-spacing: 0.05em;
}

.nav-group h2::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

/* Link rows */
.nav-rows {
  display: grid;
  grid-template-columns: repeat(var(--nav-cols), minmax(0, 1fr));
  column-gap: 2rem;
}

.nav-row {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
  margin: 0 -0.5rem;
  padding: 0.45rem 0.5rem;
  border-radius: 6px;
  color: inherit;
  text-decoration: none;
  transition: background-color 0.15s;
}

.nav-row:hover {
  background: var(--vp-c-bg-soft);
}

.nav-icon {
  flex: 0 0 18px;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  object-fit: contain;
}

.nav-icon-fallback {
  display: grid;
  place-items: center;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-size: 0.6rem;
  font-weight: 600;
}

.nav-row b {
  flex: 0 0 auto;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.855rem;
  font-weight: 500;
}

.nav-row i {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--vp-c-text-3);
  font-style: normal;
  font-size: 0.795rem;
}

.nav-row em {
  flex: 0 0 auto;
  color: var(--vp-c-text-3);
  font-style: normal;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.15s;
}

.nav-row:hover em {
  opacity: 1;
}

.nav-empty {
  padding: 4rem 0;
  color: var(--vp-c-text-3);
}

.nav-total {
  margin-top: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-3);
  font-size: 0.75rem;
}
</style>
