<template>
  <main
    class="flex flex-col flex-grow"
    :style="{
      background,
    }"
  >
    <slot />
  </main>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const themeStore = useThemeStore()

const props = defineProps<{
  theme?: ThemeOption
}>()

const pageBgColors = {
  Vichagarn: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, #04489A 28.91%, #0B294E 92.96%)',
  SilpVat: 'linear-gradient(180deg, #1F0A41 29.1%, #4F1B6F 100%)',
  Gera: 'linear-gradient(180deg, #390000 60.73%, #800000 100%)',
  Pat: 'linear-gradient(180deg, #FFF2D7 58.85%, #FDD37E 99.99%, #FFCB64 100%)',
  Other: 'linear-gradient(180deg, #35638E 26.29%, #00203E 100%)',
  Main: 'linear-gradient(137.77deg, #130000 6.66%, #343434 50.91%, #130000 95.54%)',
}

const background = computed(() => pageBgColors[themeStore.savedTheme])

</script>

<style>
</style>
