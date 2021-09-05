<template>
  <div class="absolute h-full w-full flex justify-center items-center">
    <swiper
      :auto-height="true"
      :style="{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}"
      :lazy="true"
      :loop="true"
      :centered-slides="true"
      :pagination="{
        'type': 'bullets',
        clickable: true,
        dynamicBullets: true,
      }"
      :navigation="true"
      class="mySwiper text-white"
    >
      <swiper-slide>
        <img class="m-auto" src="https://picsum.photos/500/500?key=1">
      </swiper-slide>
      <swiper-slide>
        <img class="m-auto" src="https://picsum.photos/500/500?key=2">
      </swiper-slide>
      <swiper-slide>
        <img class="m-auto" src="https://picsum.photos/500/500?key=3">
      </swiper-slide>
      <swiper-slide>
        <img class="m-auto" src="https://picsum.photos/500/500?key=4">
      </swiper-slide>
      <swiper-slide>
        <img class="m-auto" src="https://picsum.photos/500/500?key=5">
      </swiper-slide>
    </swiper>
    <!-- Backdrop -->
    <div class="absolute h-full w-full flex justify-center items-center root" @click="print" />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import SwiperCore, {
  Pagination, Navigation,
} from 'swiper'

SwiperCore.use([Pagination, Navigation])

const print = (e: MouseEvent) => {
  e.stopPropagation()
}

</script>

<style scoped>
.mySwiper {
    max-width: 800px;
    max-height: 500px;
}

.root {
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
