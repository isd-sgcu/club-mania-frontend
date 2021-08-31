<template>
  <BackgroundSection>
    <div class="relative flex items-center justify-center">
      <Banner :theme="routeName" :is-club="false" />
    </div>
    <div class=" w-full flex flex-col items-center py-12 ">
      <h3>
        สำรวจชมรม
      </h3>
      <CategoryTable v-if="routeName === 'Pat'">
        <PatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorPat" />
      </CategoryTable>
      <CategoryTable v-if="routeName === 'SilpVat'">
        <SilpvatCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="routeName === 'Other'">
        <OtherCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" :color="item.colorOther" />
      </CategoryTable>
      <CategoryTable v-if="routeName === 'Gera'">
        <GeraCard v-for="(item, index) in data" :key="index" href="/" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="routeName === 'Vichagarn'">
        <VichagarnCard v-for="(item, index) in data" :key="index" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
    </div>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { getCategory } from './utils'

const routeName = getCategory()

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
