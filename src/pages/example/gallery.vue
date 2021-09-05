<template>
  <div class="flex">
    <button class="mt-20 text-white" @click="isOpen = true">
      Open Gallery
    </button>
    <GalleryLightBox :handle-close="handleClose" :is-open="isOpen" />
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const handleClose = () => {
  isOpen.value = false
}
</script>
