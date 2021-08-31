<template>
  <div>
    <Banner :theme="themeStore.savedTheme" :is-club="false" />
    <div class=" w-full flex flex-col items-center py-12 ">
      <h3>
        สำรวจชมรม
      </h3>
      <CategoryTable v-if="themeStore.savedTheme === 'Pat'">
        <PatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorPat" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'SilpVat'">
        <SilpvatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Other'">
        <OtherCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorOther" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Gera'">
        <GeraCard v-for="(item, index) in data" :key="index" href="/" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Vichagarn'">
        <VichagarnCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
const themeStore = useThemeStore()

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
