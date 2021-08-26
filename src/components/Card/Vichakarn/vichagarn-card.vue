<script setup lang="ts">

interface IProps {
  imgUrl: string
  text: string
}

defineProps<IProps>()

</script>

<template>
  <div class="flex flex-col items-center w-max">
    <vichakarn-image-card :img-url="imgUrl"></vichakarn-image-card>
    <vichagarn-text-card>{{ text }}</vichagarn-text-card>
  </div>
</template>
