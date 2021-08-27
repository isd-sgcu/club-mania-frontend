import { useThemeStore } from '~/stores/themes'
import { ThemeOption, UserModule } from '~/types'

// maps routes to themes
export const themeMap: {
  [route: string]: ThemeOption
} = {
  '/club/jk': 'Gera',
}

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    const store = useThemeStore()
    router.afterEach(() => {
      const path = router.currentRoute.value.path
      const themeOfThisPath = themeMap[path]
      // themeOfThisPath could be undefined if the route hasn't been registered in the themeMap above.
      if (themeOfThisPath)
        store.setNewTheme(themeMap[path])
    })
  }
}
