<template>
  <!---Slide show_-->
  <swiper :pagination="true" class="h-78 w-full">
    <swiper-slide class="bg-black">
      Club Mania 2021
    </swiper-slide>
    <swiper-slide class="bg-rose-500">
      ฝ่ายกีฬา
    </swiper-slide>
    <swiper-slide class="bg-yellow-500">
      ฝ่ายพัฒน์
    </swiper-slide>
    <swiper-slide class="bg-blue-500">
      ฝ่ายวิชาการ
    </swiper-slide>
    <swiper-slide class="bg-purple-500">
      ฝ่ายศิลป์วัฒน์
    </swiper-slide>
    <swiper-slide class="bg-navy">
      ฝ่ายอื่นๆ
    </swiper-slide>
  </swiper>
  <!---Main content-->
  <div class=" w-full flex flex-col items-center py-12 ">
    <h3 class="mb-48px">
      สำรวจชมรม
    </h3>
    <Grid>
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
  Pagination,
} from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination])

</script>

<style>
</style>
