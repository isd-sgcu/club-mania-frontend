<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  imgUrl: String,
  text: String,
})

const { imgUrl, text } = toRefs(props)

</script>

<template>
  <div>
    <PatImageCard class="mb-2" :img-url="imgUrl" />
    <PatTextCard>{{ text }}</PatTextCard>
  </div>
</template>
