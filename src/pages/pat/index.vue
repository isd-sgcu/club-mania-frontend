<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { clubList } from '~/assets/clubs/clubList'
import { PaletteKey } from '~/components/Card/Pat/types'

const color = ['red', 'blue', 'yellow', 'green'] as PaletteKey[]

const data = clubList.filter(value => value.category === 'pat').map((value, index) => {
  return {
    text: value.name,
    imgUrl: value.logo,
    href: value.url,
    colorPat: color[index % 4],
  }
})

</script>
