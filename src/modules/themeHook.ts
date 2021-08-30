import { useThemeStore } from '~/stores/themes'
import { ThemeOption, UserModule } from '~/types'

// maps routes to themes
export const themeMap: {
  [route: string]: ThemeOption
} = {
  '/club/SilpVat': 'SilpVat',
  '/club/Vichagarn': 'Vichagarn',
  '/club/Gera': 'Gera',
  '/club/Pat': 'Pat',
  '/club/Other': 'Other',
}

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    const store = useThemeStore()
    router.afterEach(() => {
      const path = router.currentRoute.value.path
      const themeOfThisPath = themeMap[path]
      // themeOfThisPath could be undefined if the route hasn't been registered in the themeMap above.
      if (themeOfThisPath)
        store.setNewTheme(themeOfThisPath)
    })
  }
}
