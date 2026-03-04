<template>
  <div class="nav-site">
    <!-- Search bar -->
    <div class="search-container">
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search navigation..."
          class="search-input"
          aria-label="Search navigation"
          @keydown="handleKeydown"
          ref="searchInput"
        />
        <div class="search-icon">🔍</div>
      </div>
    </div>

    <!-- Category tabs -->
    <div class="category-tabs" role="tablist">
      <button
        v-for="category in categories"
        :key="category"
        :class="['tab', { active: activeCategory === category }]"
        :aria-pressed="activeCategory === category"
        role="tab"
        @click="setActiveCategory(category)"
      >
        {{ category }}
      </button>
    </div>

    <!-- Navigation cards -->
    <div class="nav-grid" v-if="filteredItems.length">
      <a
        v-for="item in filteredItems"
        :key="item.id"
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        class="nav-card"
      >
        <div class="card-icon">
          <img
            v-if="item.icon && !failedIcons.has(item.id)"
            :src="item.icon"
            :alt="item.title"
            loading="lazy"
            @error="handleIconError(item.id)"
          />
          <div v-else class="default-icon">{{ item.title.charAt(0).toUpperCase() }}</div>
        </div>
        <div class="card-content">
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-description">{{ item.description }}</p>
          <span class="card-category">{{ item.category }}</span>
        </div>
      </a>
    </div>

    <!-- Empty state -->
    <div class="empty-state" v-else>
      <p>No matching results found</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { navItems } from '../data/navItems.js'

// Reactive state
const searchQuery = ref('')
const activeCategory = ref('ALL')
const searchInput = ref(null)
const failedIcons = reactive(new Set())

// Computed
const categories = computed(() => {
  return ['ALL', ...new Set(navItems.map(item => item.category))]
})

const filteredItems = computed(() => {
  let items = navItems

  // Filter by category
  if (activeCategory.value !== 'ALL') {
    items = items.filter(item => item.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    items = items.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    )
  }

  return items
})

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    searchQuery.value = ''
    searchInput.value.blur()
  }
}

const handleIconError = (id) => {
  failedIcons.add(id)
}

// Global keyboard handler - auto-focus search on letter/digit key press
const globalKeyHandler = (event) => {
  if (event.key.length === 1 && /[a-zA-Z0-9]/.test(event.key) && !event.ctrlKey && !event.metaKey) {
    if (document.activeElement !== searchInput.value) {
      searchInput.value.focus()
    }
  }
}

// Lifecycle
onMounted(() => {
  nextTick(() => {
    if (searchInput.value) {
      searchInput.value.focus()
    }
  })
  document.addEventListener('keydown', globalKeyHandler)
})

onUnmounted(() => {
  document.removeEventListener('keydown', globalKeyHandler)
})
</script>

<style scoped>
.nav-site {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Search bar */
.search-container {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.search-box {
  position: relative;
  width: 100%;
  max-width: 600px;
}

.search-input {
  width: 100%;
  padding: 1rem 3rem 1rem 1rem;
  font-size: 1.1rem;
  border: 2px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-1-alpha);
}

.search-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
}

/* Category tabs */
.category-tabs {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tab {
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 20px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.tab:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.tab.active {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

/* Navigation card grid */
.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.nav-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: all 0.3s ease;
  gap: 1rem;
  text-decoration: none;
  color: inherit;
  animation: fadeInUp 0.6s ease-out;
}

.nav-card:nth-child(odd) {
  animation-delay: 0.1s;
}

.nav-card:nth-child(even) {
  animation-delay: 0.2s;
}

.nav-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px var(--vp-c-shadow);
}

.card-icon {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.card-icon img {
  width: 32px;
  height: 32px;
  border-radius: 4px;
}

.default-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
}

.card-content {
  flex: 1;
  min-width: 0;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-description {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-category {
  display: inline-block;
  padding: 0.2rem 0.5rem;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav-site {
    padding: 1rem;
  }

  .nav-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .nav-card {
    padding: 1rem;
  }
}
</style>
