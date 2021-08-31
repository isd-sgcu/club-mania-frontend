import { useThemeStore } from '~/stores/themes'
import { ThemeOption, UserModule } from '~/types'

// maps routes to themes
export const themeMap: {
  [route: string]: ThemeOption
} = {
  '/club/silpVat': 'SilpVat',
  '/club/vichagarn': 'Vichagarn',
  '/club/gera': 'Gera',
  '/club/pat': 'Pat',
  '/club/other': 'Other',
  '/category/silpVat': 'SilpVat',
  '/category/vichagarn': 'Vichagarn',
  '/category/gera': 'Gera',
  '/category/pat': 'Pat',
  '/category/other': 'Other',
}

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    const store = useThemeStore()
    router.afterEach(() => {
      const path = router.currentRoute.value.path.toLowerCase()

      const themeOfThisPath = themeMap[path]
      // themeOfThisPath could be undefined if the route hasn't been registered in the themeMap above.
      if (themeOfThisPath)
        store.setNewTheme(themeOfThisPath)
    })
  }
}
