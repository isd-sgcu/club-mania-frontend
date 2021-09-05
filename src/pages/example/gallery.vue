<template>
  <div class="flex">
    <button class="mt-20 text-white" @click="isOpen = true">
      Open Gallery
    </button>
    <GalleryLightBox :handle-close="handleClose" :is-open="isOpen" :img-url="imgUrl" />
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const handleClose = () => {
  isOpen.value = false
}

const imgUrl = ['https://picsum.photos/500/500?key=1', 'https://picsum.photos/500/500?key=2', 'https://picsum.photos/500/500?key=3', 'https://picsum.photos/500/500?key=4', 'https://picsum.photos/500/500?key=5']
</script>
