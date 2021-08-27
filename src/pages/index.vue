<template>
  <PageBackground :genre="name" />
  <div class="wrapper">
    <Carousel />
    <h1>สำรวจชมรม</h1>
    <button @click="goNextTheme">
      click me
    </button>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()
const name = ref(theme.savedTheme)

let idx = 0

const goNextTheme = () => {
  idx = (idx + 1) % 6
  theme.setNewTheme(idx)
}
</script>

<style>
.wrapper {
  @apply w-full min-h-960px text-center;
}
</style>
