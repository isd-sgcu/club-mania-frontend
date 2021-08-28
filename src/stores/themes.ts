import { acceptHMRUpdate, defineStore } from 'pinia'
import { ThemeOption } from '~/types'

export const useThemeStore = defineStore('theme', () => {
  /**
   * Current theme of the website.
   */
  const savedTheme = ref<ThemeOption>('Main')

  function setNewTheme(name: ThemeOption) {
    savedTheme.value = name
  }

  return {
    setNewTheme,
    savedTheme,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
