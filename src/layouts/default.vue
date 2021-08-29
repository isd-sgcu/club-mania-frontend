<template>
  <Navbar />
  <PageBackground :theme="name">
    <router-view />
  </PageBackground>
  <Footer :theme="name" />
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()
const name = ref(theme.savedTheme)

</script>
