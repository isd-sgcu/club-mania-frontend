<template>
  <PageBackground :theme="theme.savedTheme" />
  <div class="flex w-full h-600px items-center justify-center">
    <button @click="ChangeTheme">
      Click Me
    </button>
  </div>
</template>

<script setup lang='ts'>
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'

const theme = useThemeStore()

const themelist = ['', 'SilpVat', 'Vichagarn', 'Gera', 'Pat', 'Other'] as ThemeOption[]

const ChangeTheme = () => {
  const random = Math.floor(Math.random() * themelist.length)
  theme.setNewTheme(themelist[random])
}

// watchEffect(() => {
//   theme.setNewTheme(name.value)
// })
</script>
