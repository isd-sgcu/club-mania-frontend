<template>
  <div class="w-full flex justify-center">
    <div v-if="props.images.length === 1">
      <div class="rounded-lg">
        <img class="h-lg cover-center cursor-pointer" :src="images[0]" :alt="clubName" @click="() => handleOpenGallery(1)" />
      </div>
    </div>
    <div v-else-if="props.images.length === 2" class="w-full h-full grid grid-cols-2 grid-rows-1 gap-3">
      <div class="flex max-h-[350px]">
        <img class="w-full rounded-lg cover-center cursor-pointer" :src="images[0]" :alt="clubName" @click="() => handleOpenGallery(1)" />
      </div>
      <div class="flex max-h-[350px]">
        <img class="w-full rounded-lg cover-center cursor-pointer" :src="images[1]" :alt="clubName" @click="() => handleOpenGallery(2)" />
      </div>
    </div>
    <div v-else-if="props.images.length === 3" class="flex flex-col h-auto w-full sm:(h-md flex-row) lg:(h-lg) xl:(h-xl)">
      <img class="<sm:(w-full) rounded-lg w-2/3  mr-2 cover-center cursor-pointer" :src="images[0]" :alt="clubName" @click="() => handleOpenGallery(1)" />
      <div class="flex <sm:(flex-row) flex-col space-y-2 overflow-hidden rounded-lg">
        <img
          class="<sm:(h-full w-2/3 mr-2 mt-2) rounded-lg h-1/2  cover-center cursor-pointer"
          :src="images[1]"
          :alt="clubName"
          @click="() => handleOpenGallery(2)"
        />
        <img
          class="<sm:(h-full w-1/3) rounded-lg h-1/2 cover-center cursor-pointer"
          :src="images[2]"
          :alt="clubName"
          @click="() => handleOpenGallery(3)"
        />
      </div>
    </div>
    <div v-else-if="props.images.length >= 4 " class="w-full h-full grid grid-cols-2 grid-rows-2 gap-3">
      <div class="flex max-h-[350px]">
        <img class="rounded-lg cover-center cursor-pointer" :src="images[0]" :alt="clubName" @click="() => handleOpenGallery(1)" />
      </div>
      <div class="flex max-h-[350px]">
        <img class="rounded-lg cover-center cursor-pointer" :src="images[1]" :alt="clubName" @click="() => handleOpenGallery(2)" />
      </div>
      <div class="flex max-h-[350px]">
        <img class="rounded-lg cover-center cursor-pointer" :src="images[2]" :alt="clubName" @click="() => handleOpenGallery(3)" />
      </div>
      <div class="relative cursor-pointer flex max-h-[350px]" @click="() => handleOpenGallery(4)">
        <div v-if="props.images.length !== 4" class="rounded-lg flex flex-row absolute w-full h-full more-detail justify-center items-center min-h-full ">
          <IcOutlinePlus color="white" class="text-6xl <sm:text-4xl" />
          <TextSub1 class="text-white sm:text-6xl <sm:text-4xl ">
            {{ props.images.length - 3 }}
          </TextSub1>
        </div>
        <div>
          <img class="w-full rounded-lg cover-center h-full" :style="{ aspectRatio: '4/3'}" :src="images[3]" :alt="clubName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[]
  clubName: string // use as alt if alt is not specified
  handleOpenGallery(newValue: number): void
}>()
</script>

<style scoped>
.more-detail {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
