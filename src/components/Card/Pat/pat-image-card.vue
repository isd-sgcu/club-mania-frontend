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
    <img class="p-2" :src="imgUrl || 'https://dummyimage.com/500x500/5c205c/ffffff.png'">
  </PatBorderCard>
</template>
