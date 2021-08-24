<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  imgUrl: String,
  text: String,
})

const { imgUrl, text } = toRefs(props)

</script>

<template>
  <div class="flex flex-col items-center w-max">
    <vichakarn-image-card :img-url="imgUrl"></vichakarn-image-card>
    <vichagarn-text-card>{{ text }}</vichagarn-text-card>
  </div>
</template>
