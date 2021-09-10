<template>
  <CategoryPage :data="data" />
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { setUpCategoryPage } from '~/utils'

const { description, data, title } = setUpCategoryPage('wichakarn', 'ฝ่ายวิชาการ')

useHead({
  title,
  meta: [
    { name: 'description', content: description },
  ],
})
</script>
