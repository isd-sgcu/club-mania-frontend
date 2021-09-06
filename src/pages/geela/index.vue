<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { clubList } from '~/assets/clubs/clubList'

const data = clubList.filter(value => value.category === 'geela').map((value) => {
  return {
    text: value.name,
    imgUrl: value.logo,
    href: value.url,
  }
})

</script>
