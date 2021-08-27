<template>
  <div class="w-[200px]">
    <div class="relative">
      <img class="absolute top-0 w-full h-full img-clip" src="https://dummyimage.com/200x200/5c205c/ffffff.png">
      <img :src="img" class="w-full h-full mb-4" preserveAspectRatio="none">
    </div>
    <div class="relative">
      <img src="./Background/darkblue.svg" class="w-full h-full" preserveAspectRatio="none">
      <text-body2 class="absolute break-words top-0 p-5 h-[88px] pt-3 text-center" :class="`text-${text}`">
        ชมรมอื่นๆ ที่ชื่อยาวนิดหน่อย dddd dddddsdsd dsdsd
      </text-body2>
    </div>
  </div>
</template>

<script setup lang="ts">
import img from './Ghost/pink.svg'
import TextColor from './text-color.json'

type GhostColorType = 'darkblue' | 'lightcyan' | 'pink' | 'red' | 'steel' | 'yellow'

interface IProps {
  ghostColor: GhostColorType
  text?: string
  imgUrl?: string
}

const { ghostColor } = defineProps<IProps>()
const text = TextColor[ghostColor]

</script>

<style scoped>
.img-clip {
    z-index: -1;
    clip-path: inset(10px 20px 20px 20px);
}
</style>
