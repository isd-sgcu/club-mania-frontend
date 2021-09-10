<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { clubList } from '~/assets/clubs/clubList'
import { GhostColorType } from '~/components/Card/Other/types'

const OtherColor = ['lightcyan', 'pink', 'red', 'steel', 'yellow'] as GhostColorType[]

let description = ''
const data = clubList.filter(value => value.category === 'other').map((value, index) => {
  description += `${value.name}, `
  return {
    text: value.name,
    imgUrl: value.logo,
    href: value.url,
    colorOther: OtherColor[index % 5],
  }
})

useHead({
  title: 'ไม่สังกัดฝ่าย | Club Mania 2021',
  meta: [
    { name: 'description', content: description },
  ],
})
</script>
