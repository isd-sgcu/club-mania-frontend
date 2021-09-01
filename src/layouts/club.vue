<template>
  <!-- <Navbar /> -->
  <main>
    <router-view />
  </main>
  <Footer :theme="theme.savedTheme" />
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()

</script>
