<script setup lang="ts">
import { defineProps } from 'vue'
import { PaletteKey } from './types'

interface IProps {
  imgUrl: string
  color: PaletteKey | 'hover'
}

defineProps<IProps>()

</script>

<template>
  <PatBorderCard class="h-[200px]" :color="color">
    <div class="p-2 h-full">
      <div class="flex h-full">
        <img class="bg-white box-border object-contain w-full py-2" :src="imgUrl">
      </div>
    </div>
  </PatBorderCard>
</template>
