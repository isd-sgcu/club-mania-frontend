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
      store.setNewTheme(themeMap[path])
    })
  }
}
