<template>
  <CategoryPage />
</template>

<script setup lang="ts">
import { clubList } from '~/assets/clubs/clubList'

const data = clubList.filter(value => value.category === 'geela').map((value) => {
  return {
    ...value,
  }
})

</script>
