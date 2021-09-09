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
  <PatBorderCard :color="color">
    <div class="p-2 h-full">
      <img class="bg-white box-border h-full object-contain w-full py-2" :src="imgUrl">
    </div>
  </PatBorderCard>
</template>
