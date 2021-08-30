<template>
  <BackgroundSection>
    <div class="relative flex items-center justify-center">
      <Banner :theme="newRouteName" :is-club="false" />
    </div>
    <div class=" w-full flex flex-col items-center py-12 ">
      <h3>
        สำรวจชมรม
      </h3>
      <CategoryTable v-if="newRouteName === 'Pat'">
        <PatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorPat" />
      </CategoryTable>
      <CategoryTable v-if="newRouteName === 'SilpVat'">
        <SilpvatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="newRouteName === 'Other'">
        <OtherCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorOther" />
      </CategoryTable>
      <CategoryTable v-if="newRouteName === 'Gera'">
        <GeraCard v-for="(item, index) in data" :key="index" href="/" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="newRouteName === 'Vichagarn'">
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

let convertedName = `${currentRoute.slice(0, 1).toUpperCase()}${currentRoute.slice(1, currentRoute.length)}`

if (convertedName === 'Silpvat')
  convertedName = 'SilpVat'

const newRouteName = ref(convertedName as ThemeOption)

theme.setNewTheme(newRouteName.value)

const data: any = [
  {
    text: 'ชมรมวิจัยยยย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'red',
    colorOther: 'lightcyan',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'blue',
    colorOther: 'pink',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'green',
    colorOther: 'red',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'yellow',
    colorOther: 'steel',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'red',
    colorOther: 'yellow',
  },
  {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'blue',
    colorOther: 'lightcyan',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'green',
    colorOther: 'pink',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'yellow',
    colorOther: 'red',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'red',
    colorOther: 'steel',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'blue',
    colorOther: 'yellow',
  },
  {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'green',
    colorOther: 'lightcyan',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'yellow',
    colorOther: 'pink',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'red',
    colorOther: 'red',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'blue',
    colorOther: 'steel',
  }, {
    text: 'ชมรมวิจัย',
    imgUrl: 'https://dummyimage.com/200x200/5c205c/ffffff.png',
    colorPat: 'green',
    colorOther: 'yellow',
  },
]

</script>
