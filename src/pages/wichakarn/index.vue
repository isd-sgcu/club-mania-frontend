<template>
  <CategoryPage />
</template>

<script setup lang="ts">
import { clubList } from '~/assets/clubs/clubList'

const data = clubList.filter(value => value.category === 'wichakarn').map((value) => {
  return {
    ...value,
  }
})

</script>
