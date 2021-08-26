<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  imgUrl: String,
})

const { imgUrl } = toRefs(props)

</script>

<template>
  <PatBorderCard>
    <img :src="imgUrl || 'https://dummyimage.com/500x500/5c205c/ffffff.png'">
  </PatBorderCard>
</template>
