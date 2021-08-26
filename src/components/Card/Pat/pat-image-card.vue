<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  imgUrl: String,
})

</script>

<template>
  <PatBorderCard>
    <img :src="imgUrl || 'https://dummyimage.com/500x500/5c205c/ffffff.png'">
  </PatBorderCard>
</template>
