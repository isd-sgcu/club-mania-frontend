<template>
  <div
    class="p-1 md:(p-2) cursor-pointer space-x-2 rounded-lg bg-opacity-0 active:bg-opacity-25 hover:bg-opacity-50"
    :class="`bg-textbox-${props.theme ?? themeStore.savedTheme}`"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const themeStore = useThemeStore()

const props = defineProps<{
  theme?: ThemeOption
}>()
</script>
