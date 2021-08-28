<script setup lang="ts">

interface IProps {
  imgUrl: string
  text: string
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
  <div class="flex flex-col items-center w-max max-w-[200px]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <vichakarn-image-card :img-url="imgUrl" :hover="detect"></vichakarn-image-card>
    <vichagarn-text-card :hover="detect">
      {{ text }}
    </vichagarn-text-card>
  </div>
</template>
