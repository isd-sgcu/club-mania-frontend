<template>
  <div class="w-full flex justify-center">
    <div v-if="props.images.length === 1">
      <div class="rounded-lg">
        <img class="h-lg cover-center" :src="images[0].url" :alt="images[0].alt ?? clubName" />
      </div>
    </div>
    <div v-else-if="props.images.length === 2"></div>
    <div v-else-if="props.images.length === 3" class="flex flex-col h-auto  w-full sm:(h-md flex-row)">
      <img class="<sm:(w-full) rounded-lg w-2/3  mr-2 cover-center" :src="images[0].url" :alt="images[0].alt ?? clubName + ' 0'" />
      <div class="flex <sm:(flex-row) flex-col space-y-2 overflow-hidden rounded-lg">
        <img
          class="<sm:(h-full w-2/3 mr-2 mt-2) rounded-lg h-1/2  cover-center"
          :src="images[1].url"
          :alt="images[1].alt ?? clubName + ' 1'"
        />
        <img
          class="<sm:(h-full w-1/3) rounded-lg h-1/2  cover-center"
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
