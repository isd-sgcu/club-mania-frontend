<template>
  <div class="max-w-[200px] cursor-pointer" style="z-index: 1;" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <div class="relative">
      <img class="absolute top-0 w-full h-full img-clip" :src="imgUrl || 'https://dummyimage.com/200x200/5c205c/ffffff.png'">
      <img :src="!detect ? ghostImg : ghostHover" class="w-full h-full mb-4" preserveAspectRatio="none">
    </div>
    <div class="relative">
      <img :src="!detect ? backgroundImg : backgroundHover" class="w-full h-full" preserveAspectRatio="none">
      <text-sub2 class="w-[200px] text-size-[0.9rem] sm:text-size-[1.25rem] absolute break-words p-5 pt-3 text-center text-card" :class="`text-${!detect ? textColor : 'white'}`">
        {{ text }}
      </text-sub2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TextColor from './text-color.json'
import { BACKGROUND, GHOST } from './CardSchema'
import { GhostColorType } from './types'

interface IProps {
  color: GhostColorType
  text?: string
  imgUrl?: string
  href?: string
}

const router = useRouter()
const { color, text, imgUrl, href } = defineProps<IProps>()

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

const handleClick = () => {
  router.push(href || '#')
}

</script>

<style scoped>
.img-clip {
    z-index: -1;
    clip-path: inset(10px 17px 20px 17px);
}

.text-card {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
