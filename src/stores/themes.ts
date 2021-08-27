import { acceptHMRUpdate, defineStore } from 'pinia'

const themes = ['defualt', 'vichakarn', 'slipvat', 'gira', 'pat', 'other']
export const useThemeStore = defineStore('theme', () => {
  /**
   * Current theme of the website.
   */
  const savedTheme = ref(themes[2])

  function setNewTheme(index: number) {
    savedTheme.value = themes[index]
  }

  return {
    setNewTheme,
    savedTheme,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
