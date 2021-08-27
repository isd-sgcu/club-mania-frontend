<template>
  <div
    class="fixed w-full h-full -z-50"
    :style="{
      background
    }"
  ></div>
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
}

const background = props.theme ? pageBgColors[props.theme] : themeStore.savedTheme

</script>
