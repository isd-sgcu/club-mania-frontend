<template>
  <BackgroundSection :theme="themeStore.savedTheme">
  <h3>おはよう</h3>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
const themeStore = useThemeStore()

</script>

<style>
</style>
