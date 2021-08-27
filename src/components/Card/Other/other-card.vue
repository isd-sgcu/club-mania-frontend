<template>
  <div class="w-[200px]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <div class="relative">
      <img class="absolute top-0 w-full h-full img-clip" :src="imgUrl || 'https://dummyimage.com/200x200/5c205c/ffffff.png'">
      <img :src="!detect ? ghostImg : ghostHover" class="w-full h-full mb-4" preserveAspectRatio="none">
    </div>
    <div class="relative">
      <img :src="!detect ? backgroundImg : backgroundHover" class="w-full h-full" preserveAspectRatio="none">
      <text-body2 class="absolute break-words p-5 pt-3 text-center text-card" :class="`text-${!detect ? textColor : 'white'}`">
        {{ text }}
      </text-body2>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextColor from './text-color.json'
import { BACKGROUND, GHOST } from './CardSchema'
import { GhostColorType } from './types'

interface IProps {
  color: GhostColorType
  text?: string
  imgUrl?: string
}

const { color, text, imgUrl } = defineProps<IProps>()

const textColor = TextColor[color]
const backgroundImg = BACKGROUND[color]
const ghostImg = GHOST[color]

const ghostHover = GHOST.darkblue
const backgroundHover = BACKGROUND.darkblue

const detect = ref(false)

const handleMouseEnter = () => {
  detect.value = true
}

const handleMouseOut = () => {
  detect.value = false
}

</script>

<style scoped>
.img-clip {
    z-index: -1;
    clip-path: inset(10px 20px 20px 20px);
}

.text-card {
  top: 50%;
  transform: translate(0, -50%);
}
</style>
