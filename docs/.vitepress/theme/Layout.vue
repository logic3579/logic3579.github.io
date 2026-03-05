<script setup>
import DefaultTheme from 'vitepress/theme'
import { useSlots } from 'vue'
import Breadcrumb from './components/Breadcrumb.vue'

const Layout = DefaultTheme.Layout
const slots = useSlots()
</script>

<template>
  <Layout>
    <template v-for="(_, name) in slots" #[name]="slotData">
      <template v-if="name === 'doc-top'">
        <Breadcrumb />
        <slot name="doc-top" v-bind="slotData || {}" />
      </template>
      <slot v-else :name="name" v-bind="slotData || {}" />
    </template>
  </Layout>
</template>
