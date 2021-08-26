<script setup lang="ts">

defineProps({
  imgUrl: String,
  text: String,
})

</script>

<template>
  <div class="flex flex-col items-center w-max">
    <vichakarn-image-card :img-url="imgUrl"></vichakarn-image-card>
    <vichagarn-text-card>{{ text }}</vichagarn-text-card>
  </div>
</template>
