<script setup lang="ts">
import { defineProps } from 'vue'
import { PaletteKey } from './types'

interface IProps {
  imgUrl: string
  text: string
  color: PaletteKey
}

defineProps<IProps>()

const detect = ref(false)

const handleMouseEnter = () => {
  detect.value = true
}

const handleMouseOut = () => {
  detect.value = false
}

</script>

<template>
  <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <PatImageCard :color="!detect ? color : 'hover'" class="mb-2" :img-url="imgUrl" />
    <PatTextCard :color="!detect ? color: 'hover'">
      {{ text }}
    </PatTextCard>
  </div>
</template>
