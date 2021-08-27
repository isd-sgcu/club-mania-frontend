<template>
  <div class="fixed w-full h-full -z-50" :style="styleObject"></div>
</template>

<script setup lang="ts">
import { ThemeOption } from '~/types'

const props = defineProps<{
  theme: ThemeOption
}>()

const pageBgColors = {
  Vichagarn: {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, #04489A 28.91%, #0B294E 92.96%)',
  },
  SilpVat: {
    background: 'linear-gradient(180deg, #1F0A41 29.1%, #4F1B6F 100%)',
  },
  Gera: {
    background: 'linear-gradient(180deg, #390000 60.73%, #800000 100%)',
  },
  Pat: {
    background: 'linear-gradient(180deg, #FFF2D7 58.85%, #FDD37E 99.99%, #FFCB64 100%)',
  },
  Other: {
    background: 'linear-gradient(180deg, #35638E 26.29%, #00203E 100%)',
  },
}

const styleObject = props.theme ? pageBgColors[props.theme] : { background: 'linear-gradient(180deg, #1F1F1F 29.1%, #212121 100%)' }

</script>
