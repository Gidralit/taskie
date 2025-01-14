<template>
  <div class="default-layout">
    <app-header />
    <slot />
  </div>
</template>

<script setup>
import { AppHeader } from '@/widgets'
</script>

<style scoped lang="scss">
.default-layout {
  @apply flex flex-col;
}
</style>
