<template>
  <div class="w-[200px]">
    <div class="relative">
      <img class="absolute top-0 w-full h-full img-clip" src="https://dummyimage.com/200x200/5c205c/ffffff.png">
      <img :src="ghostImg" class="w-full h-full mb-4" preserveAspectRatio="none">
    </div>
    <div class="relative">
      <img :src="backgroundImg" class="w-full h-full" preserveAspectRatio="none">
      <text-body2 class="absolute break-words top-0 p-5 h-[88px] pt-3 text-center" :class="`text-${text}`">
        ชมรมอื่นๆ ที่ชื่อยาวนิดหน่อย dddd dddddsdsd dsdsd
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

const { color } = defineProps<IProps>()

const text = TextColor[color]
const backgroundImg = BACKGROUND[color]
const ghostImg = GHOST[color]

</script>

<style scoped>
.img-clip {
    z-index: -1;
    clip-path: inset(10px 20px 20px 20px);
}
</style>
