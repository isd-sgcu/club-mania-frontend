<script setup lang="ts">
import { defineProps } from 'vue'
import { PaletteKey } from './types'

interface IProps {
  imgUrl: string
  text: string
  color: PaletteKey
}

defineProps<IProps>()

</script>

<template>
  <div>
    <PatImageCard :color="color" class="mb-2" :img-url="imgUrl" />
    <PatTextCard :color="color">
      {{ text }}
    </PatTextCard>
  </div>
</template>
