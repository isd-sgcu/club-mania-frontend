<template>
  <BackgroundSection>
    <div class=" w-full flex flex-col items-center py-12 ">
      <h3>
        สำรวจชมรม
      </h3>
      <CategoryTable>
        <PatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="'red'" />
        <SilpvatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
        <OtherCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="'red'" />
        <GeraCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
        <VichagarnCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
    </div>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'

const route = useRouter()
const theme = useThemeStore()

const currentRoute = route.currentRoute.value.params.type as string
const newRouteName = `${currentRoute.slice(0, 1).toUpperCase()}${currentRoute.slice(1, currentRoute.length)}` as ThemeOption

theme.setNewTheme(newRouteName)

const data: any = [
  {
    text: 'ชมรมวิจัยยยย',
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
