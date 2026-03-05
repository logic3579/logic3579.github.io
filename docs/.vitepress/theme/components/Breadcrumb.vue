<template>
  <nav v-if="items.length" class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(item, i) in items" :key="item.path" class="breadcrumb-item">
        <template v-if="i > 0">
          <span class="breadcrumb-sep" aria-hidden="true">{{ separator }}</span>
        </template>
        <a v-if="i < items.length - 1" :href="item.path" class="breadcrumb-link">{{ item.label }}</a>
        <span v-else class="breadcrumb-current" aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const separator = '›'

const items = computed(() => {
  const path = route.path
  if (!path || path === '/') return []

  const parts = path.split('/').filter(Boolean)
  if (parts.length === 0) return []

  const result = [{ path: '/', label: 'Home' }]
  let acc = ''
  for (let i = 0; i < parts.length; i++) {
    acc += (acc ? '/' : '') + parts[i]
    const label = humanize(parts[i])
    result.push({ path: '/' + acc, label })
  }
  return result
})

function humanize(str) {
  if (str === 'README') return 'Overview'
  if (str === 'gitbook') return 'Gitbook'
  if (str === 'about') return 'About'
  return str
    .replace(/[-_]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, (_, a, b) => `${a} ${b}`)
    .replace(/([A-Z]+)([A-Z][a-z])/g, (_, a, b) => `${a} ${b}`)
    .replace(/^\w/, c => c.toUpperCase())
}
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 1rem;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-sep {
  margin: 0 0.375rem;
  color: var(--vp-c-text-3);
  user-select: none;
}

.breadcrumb-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-1);
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
</style>
