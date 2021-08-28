<template>
  <!---Slide show--->
  <swiper
    :pagination="true"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{'delay': 2500, 'disableOnInteraction': false}"
    class="w-screen"
  >
    <!---Each page of the slide-->
    <swiper-slide v-for="(item, index) in themes" :key="index" class="relative flex items-center justify-center">
      <Banner :theme="item" :is-club="false" />
    </swiper-slide>
  </swiper>
  <!---Main content-->
  <div class=" w-full flex flex-col items-center py-12 ">
    <h3 class="mb-48px">
      สำรวจชมรม
    </h3>
    <Grid>
      <!---Just Dummy Card--->
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
      <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
    </Grid>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination,
} from 'swiper'

// Types
import { ThemeOption } from '~/types'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination])

const themes = ['Main', 'Gera', 'Pat', 'Vichagarn', 'SilpVat', 'Other'] as ThemeOption[]
</script>

<style>
.swiper-pagination {
  transform: translateY(-65%);
}

.swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: rgba(187, 187, 187, 0.4);
}
.swiper-pagination-bullet-active {
  background: white;
}
</style>
