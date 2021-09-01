import { useThemeStore } from '~/stores/themes'
import { ThemeOption, UserModule } from '~/types'

// maps routes to themes
export const routeKeyToTheme: {
  [pathIdentifier: string]: ThemeOption
} = {
  silpvat: 'SilpVat',
  wichakarn: 'Vichagarn',
  gela: 'Gera',
  pat: 'Pat',
  other: 'Other',
}

export const install: UserModule = ({ router, isClient }) => {
  if (isClient) {
    const store = useThemeStore()
    router.afterEach(() => {
      const path = router.currentRoute.value.path.toLowerCase()

      if (path === '/') {
        store.setNewTheme('Main')
        return
      }

      const category = path.split('/')[1]
      for (const key of Object.keys(routeKeyToTheme)) {
        if (category.includes(key)) {
          store.setNewTheme(routeKeyToTheme[key])
          return
        }
      }
    })
  }
}
