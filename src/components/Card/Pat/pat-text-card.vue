<script setup lang="ts">
import { defineProps } from 'vue'
import { PaletteKey } from './types'

interface IProps {
  color: PaletteKey | 'hover'
}

defineProps<IProps>()

</script>
<template>
  <PatBorderCard :color="color">
    <div class="text-container flex items-center justify-center">
      <TextSub2><slot /></TextSub2>
      <div class="rectangle-top-left" />
      <div class="rectangle-top-right" />
      <div class="rectangle-bottom-left" />
      <div class="rectangle-bottom-right" />
    </div>
  </PatBorderCard>
</template>

<style scoped>
.text-container {
    @apply min-h-[30px] w-full h-full pt-2 pb-2 pl-4 pr-4 text-white relative text-center;
}

.rectangle-top-left {
    @apply absolute w-[4px] h-[4px] absolute bg-black top-[4px] left-[4px];
}

.rectangle-top-right {
    @apply absolute w-[4px] h-[4px] absolute bg-black top-[4px] right-[4px];
}

.rectangle-bottom-left {
    @apply absolute w-[4px] h-[4px] absolute bg-black bottom-[4px] left-[4px];
}

.rectangle-bottom-right {
    @apply absolute w-[4px] h-[4px] absolute bg-black bottom-[4px] right-[4px];

}
</style>
