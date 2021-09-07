<template>
  <div class="w-full flex justify-center">
    <div v-if="props.images.length === 1">
      <div class="rounded-lg">
        <img class="h-lg cover-center" :src="images[0]" :alt="clubName" />
      </div>
    </div>
    <div v-else-if="props.images.length === 2" class="w-full max-w-[900px] grid grid-cols-2 grid-rows-1 gap-3">
      <img class="w-full h-full rounded-lg cover-center" :src="images[0]" :alt="clubName" />
      <img class="w-full h-full rounded-lg cover-center" :src="images[1]" :alt="clubName" />
    </div>
    <div v-else-if="props.images.length === 3" class="flex flex-col h-auto  w-full sm:(h-md flex-row) lg:(h-lg) xl:(h-xl)">
      <img class="<sm:(w-full) rounded-lg w-2/3  mr-2 cover-center" :src="images[0]" :alt="clubName" />
      <div class="flex <sm:(flex-row) flex-col space-y-2 overflow-hidden rounded-lg">
        <img
          class="<sm:(h-full w-2/3 mr-2 mt-2) rounded-lg h-1/2  cover-center"
          :src="images[1]"
          :alt="clubName"
        />
        <img
          class="<sm:(h-full w-1/3) rounded-lg h-1/2 cover-center"
          :src="images[2]"
          :alt="clubName"
        />
      </div>
    </div>
    <div v-else-if="props.images.length >= 4 " class="h-auto max-w-[900px] w-full grid grid-cols-2 grid-rows-2 gap-3">
      <img class="w-full rounded-lg cover-center h-full" :src="images[0]" :alt="clubName" />
      <img class="w-full rounded-lg cover-center h-full" :src="images[1]" :alt="clubName" />
      <img class="w-full rounded-lg cover-center h-full" :src="images[2]" :alt="clubName" />
      <div class="relative">
        <div class="absolute w-full h-full more-detail grid place-content-center">
          <IcOutlinePlus color="white" font-size="60px" />
        </div>
        <img class="w-full h-full rounded-lg cover-center" :src="images[3]" :alt="clubName" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[]
  clubName: string // use as alt if alt is not specified
}>()
</script>

<style scoped>
.more-detail {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
