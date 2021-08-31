<template>
  <!---Slide show--->
  <swiper
    :pagination="{clickable: true}"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{'delay': 2500, 'disableOnInteraction': false}"
    class="w-full"
  >
    <!---Each page of the slide-->
    <swiper-slide v-for="(item, index) in themes" :key="index" class="relative flex items-center justify-center">
      <Banner :theme="item" :is-club="false" />
    </swiper-slide>
  </swiper>
  <!---Main content-->
  <div class=" w-full flex flex-col items-center py-12 ">
    <h3>
      สำรวจชมรม
    </h3>
    <CategoryTable>
      <MainCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :type="item.variant" />
    </CategoryTable>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination,
} from 'swiper'

// Types
import { ThemeOption } from '~/types'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination])

const themes = ['Main', 'Gera', 'Pat', 'Vichagarn', 'SilpVat', 'Other'] as ThemeOption[]

const data: any = [
  {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'SilpVat',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Vichagarn',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Other',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Gera',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Pat',
  },
  {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'SilpVat',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Vichagarn',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Other',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Gera',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Pat',
  },
  {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'SilpVat',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Vichagarn',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Other',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Gera',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    variant: 'Pat',
  },
]
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
