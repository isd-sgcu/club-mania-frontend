<template>
  <div class="absolute h-full w-full pl-4 pr-4 flex justify-center items-center transition-all" :style="{opacity: isOpen ? '1': '0', zIndex: isOpen ? '99' : '-1'}">
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
      <swiper-slide v-for="item in imgUrl" :key="item">
        <img class="m-auto" :src="item">
      </swiper-slide>
    </swiper>
    <!-- Backdrop -->
    <div class="absolute h-full w-full flex justify-center items-center root" @click="handleClose" />
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import SwiperCore, {
  Pagination, Navigation,
} from 'swiper'

SwiperCore.use([Pagination, Navigation])

defineProps<{ handleClose(): void; isOpen: boolean; imgUrl: string[]}>()

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
