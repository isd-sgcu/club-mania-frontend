<template>
  <CategoryPage />
</template>

<script lang="ts">
import { clubList } from '~/assets/clubs/clubList'

const data = clubList.filter(value => value.category === 'silpvat').map((value) => {
  return {
    ...value,
  }
})

</script>
