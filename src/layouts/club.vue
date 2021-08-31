<template>
  <!-- <Navbar /> -->
  <main>
    <router-view />
  </main>
  <Footer :theme="name" />
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()
const name = ref(theme.savedTheme)

</script>
