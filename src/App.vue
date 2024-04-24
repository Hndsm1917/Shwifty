<template>
  <component :is="components[currentLayout]" />
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import DefaultLayout from '@/layouts/default.vue'
interface LayoutComponents {
  [key: string]: ReturnType<typeof defineComponent>
}

const components: LayoutComponents = {
  DefaultLayout
}

const currentLayout = ref('DefaultLayout')
</script>

<style scoped lang="scss"></style>
