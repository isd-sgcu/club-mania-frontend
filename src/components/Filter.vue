<template>
  <button
    class="<sm:(text-1.3rem px-20px) bg-transparent text-20px px-28px py-4px md:(text-[24px] px-[34px] py-[6px]) focus:outline-none rounded-full border-1 transition-all active:outline-none tracking-normal"
    :style="{
      background: props.activeState ? backgrounds[themeStore.savedTheme] : 'transparent',
      borderColor: backgrounds[themeStore.savedTheme],
      color: props.activeState ? textActive[themeStore.savedTheme] : backgrounds[themeStore.savedTheme]
    }"
    @click="toggle"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
const themeStore = useThemeStore()

const props = defineProps<{ activeState: boolean }>()

const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>()

const toggle = () => {
  emit('toggle', !props.activeState)
}

// css
const backgrounds = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: '#5B3112',
  Other: 'white',
  Main: 'white',
}
const textActive = {
  SilpVat: '#1B0D31',
  Vichagarn: '#1B0D31',
  Gera: '#1B0D31',
  Pat: '#F4CF58',
  Other: '#1B0D31',
  Main: '#1B0D31',
}
</script>
