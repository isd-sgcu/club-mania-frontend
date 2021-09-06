<template>
  <div>
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
      <TextHeading class="md:mb-8">
        สำรวจชมรม
      </TextHeading>
      <CategoryTable>
        <MainCard
          v-for="(item, index) in data"
          :key="index"
          :text="item.text"
          :img-url="item.imgUrl"
          :type="item.variant"
          :href="item.href"
        />
      </CategoryTable>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// import Swiper core and required modules
import SwiperCore, {
  Autoplay, Pagination,
} from 'swiper'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

// Types
import TextHeading from '~/components/typography/text-heading.vue'
import { Variant } from '~/components/Card/Main/types'
import { clubList } from '~/assets/clubs/clubList'
import { ThemeOption } from '~/types'

// install Swiper modules
SwiperCore.use([Autoplay, Pagination])

const themes = ['Main', 'Gera', 'Pat', 'Vichagarn', 'SilpVat', 'Other'] as ThemeOption[]
const variantList = ['Main', 'Gera', 'Pat', 'Wichakarn', 'SilpVat', 'Other'] as Variant[]

const shuffle = (array: any[]) => {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]]
  }

  return array
}

const data = shuffle(clubList.map((value) => {
  const newVariant = variantList.filter(each => each.toLowerCase() === value.category)[0]
  return {
    text: value.name,
    imgUrl: value.logo,
    variant: newVariant,
    href: value.url,
  }
}))

</script>

<style>
.swiper-pagination {
  @apply bottom-6 md:bottom-12 2xl:bottom-2018;
}

.swiper-pagination-bullet {
  @apply w-12px h-12px 2xl:(w-16px h-16px);
  opacity: 1;
  background: rgba(187, 187, 187, 0.4);
}
.swiper-pagination-bullet-active {
  background: white;
}
</style>
