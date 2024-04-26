<template>
  <component :is="components[currentLayout]" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Components } from '@/types/types'
import DefaultLayout from '@/layouts/default.vue'

const components: Components = {
  DefaultLayout
}

const currentLayout = ref('DefaultLayout')
</script>

<style scoped lang="scss"></style>
