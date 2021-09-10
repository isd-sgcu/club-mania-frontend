<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { clubList } from '~/assets/clubs/clubList'
import { PaletteKey } from '~/components/Card/Pat/types'

const color = ['red', 'blue', 'yellow', 'green'] as PaletteKey[]

let description = ''
const data = clubList.filter(value => value.category === 'pat').map((value, index) => {
  description += `${value.name}, `
  return {
    text: value.name,
    imgUrl: value.logo,
    href: value.url,
    colorPat: color[index % 4],
  }
})

useHead({
  title: 'ฝ่ายพัฒนาสังคมฯ | Club Mania 2021',
  meta: [
    { name: 'description', content: description },
  ],
})
</script>
