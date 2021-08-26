<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  imgUrl: String,
  text: String,
})

</script>

<template>
  <div>
    <PatImageCard class="mb-2" :img-url="imgUrl" />
    <PatTextCard>{{ text }}</PatTextCard>
  </div>
</template>
