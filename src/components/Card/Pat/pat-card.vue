<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { PaletteKey } from './types'

interface IProps {
  imgUrl: string
  text: string
  color: PaletteKey
  href?: string
}

const router = useRouter()
const { href } = defineProps<IProps>()

const detect = ref(false)

const handleMouseEnter = () => {
  detect.value = true
}

const handleMouseOut = () => {
  detect.value = false
}

const handleClick = () => {
  router.push(href || '#')
}

</script>

<template>
  <div class="cursor-pointer" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <PatImageCard :color="!detect ? color : 'hover'" class="mb-2" :img-url="imgUrl" />
    <PatTextCard :color="!detect ? color: 'hover'">
      {{ text }}
    </PatTextCard>
  </div>
</template>
