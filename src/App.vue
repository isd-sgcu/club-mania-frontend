<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Club Mania 2021 | Clubs in Chulalongkorn University',
  meta: [
    { name: 'description', content: 'Club Mania 2021 is a website that provides information about the clubs within Chulalongkorn University. Visitors can ask qustions about a club directly in each club\'s page' },
    { name: 'keywords', content: 'club, chula, clubmania, chulalongkorn' },
    { name: 'application-name', content: 'Club Mania 2021' },
  ],
})
</script>

<template>
  <router-view />
</template>
