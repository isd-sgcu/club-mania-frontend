<script setup lang="ts">
import { useRouter } from 'vue-router'

interface IProps {
  imgUrl: string
  text: string
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
  <div class="flex flex-col items-center max-w-[200px] cursor-pointer" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <vichakarn-image-card :img-url="imgUrl" :hover="detect"></vichakarn-image-card>
    <vichagarn-text-card class="flex-1 flex-col flex justify-center items-center" :hover="detect">
      {{ text }}
    </vichagarn-text-card>
  </div>
</template>
