<template>
  <div class="w-full flex justify-center">
    <div v-if="props.images.length === 1">
      <div class="rounded-lg">
        <img class="h-lg" :src="images[0].url" :alt="images[0].alt ?? clubName" />
      </div>
    </div>
    <div v-else-if="props.images.length === 2"></div>
    <div v-else-if="props.images.length === 3" class="flex w-full h-md">
      <img class="rounded-lg w-2/3 mr-2" :src="images[0].url" :alt="images[0].alt ?? clubName + ' 0'" />
      <div class="flex flex-col space-y-2 overflow-hidden rounded-lg">
        <img
          class="rounded-lg h-1/2"
          :src="images[1].url"
          :alt="images[1].alt ?? clubName + ' 1'"
        />
        <img
          class="rounded-lg h-1/2"
          :src="images[2].url"
          :alt="images[2].alt ?? clubName + ' 2'"
        />
      </div>
    </div>
    <div v-else></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: { url: string; alt?: string }[]
  clubName: string // use as alt if alt is not specified
}>()
</script>

<style scoped>
</style>
