<template>
  <span
    class="<sm:(px-2 text-sm) italic border-1 rounded-full px-3 py-0.5 text-center"
    :class="`border-${badgeBorder[decidedTheme]} text-${badgeTextColor[decidedTheme]}`"
  >{{ badgeText }}</span>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const themeStore = useThemeStore()

const props = defineProps<{ badgeText: string; theme?: ThemeOption }>()

const decidedTheme = props.theme ?? themeStore.savedTheme

const badgeBorder = {
  SilpVat: 'blue-b100',
  Vichagarn: 'blue-b100',
  Gera: '[#FFCECB]',
  Pat: 'LightBrown',
  Other: 'gray-light',
  Main: 'white',
}
const badgeTextColor = {
  SilpVat: 'blue-b100',
  Vichagarn: 'blue-b100',
  Gera: '[#FFCECB]',
  Pat: 'LightBrown',
  Other: 'gray-light',
  Main: 'gray-light',
}
</script>
