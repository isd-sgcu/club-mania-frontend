<template>
  <div class="w-full flex justify-center">
    <div v-if="props.images.length === 1">
      <div class="rounded-[16px]">
        <img class="h-[504px]" :src="images[0].url" :alt="images[0].alt ?? clubName" />
      </div>
    </div>
    <div v-else-if="props.images.length === 2"></div>
    <div v-else-if="props.images.length === 3" class="grid-3">
      <div class="rounded-[16px] overflow-hidden grid-3-1">
        <img :src="images[0].url" :alt="images[0].alt ?? clubName + ' 0'" />
      </div>
      <div
        v-for="(image, idx) of images.slice(1, 3)"
        :key="idx"
        class="rounded-[16px] overflow-hidden"
        :class="`grid-3-${idx + 2}`"
      >
        <img :src="image.url" :alt="image.alt ?? clubName + ` ${idx}`" />
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
.grid-3 {
  display: grid;
  grid-template-areas:
    "first first first first second second"
    "first first first first second second"
    "first first first first second second"
    "first first first first third third"
    "first first first first third third";
}
.grid-3-1 {
  grid-area: first;
}
.grid-3-2 {
  grid-area: second;
}
.grid-3-3 {
  grid-area: third;
}
</style>
