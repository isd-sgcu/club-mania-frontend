<template>
  <section
    class="p-4 rounded-lg w-full"
    :class="`bg-textbox-${props.theme ?? themeStore.savedTheme} text-${textColors[props.theme ?? themeStore.savedTheme]}`"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const themeStore = useThemeStore()

const props = defineProps<{
  theme?: ThemeOption
}>()

const textColors = {
  SilpVat: 'grey-light',
  Vichagarn: 'grey-light',
  Gera: 'grey-light',
  Pat: 'Brown',
  Other: 'white',
  Main: 'white',
}
</script>
