<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { clubList } from '~/assets/clubs/clubList'
import { GhostColorType } from '~/components/Card/Other/types'

const OtherColor = ['lightcyan', 'pink', 'red', 'steel', 'yellow'] as GhostColorType[]

const data = clubList.filter(value => value.category === 'other').map((value, index) => {
  return {
    text: value.name,
    imgUrl: value.logo,
    href: value.url,
    colorOther: OtherColor[index % 5],
  }
})

</script>
