<template>
  <PageBackground :theme="name" />
  <div class="wrapper">
    <Carousel />
    <h1>สำรวจชมรม</h1>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()
const name = ref(theme.savedTheme)
</script>

<style>
.wrapper {
  @apply w-full min-h-960px text-center;
}
</style>
