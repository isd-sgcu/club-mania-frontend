import { useRouter } from 'vue-router'
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'

type IRoute = 'gera' | 'silpvat' | 'vichagarn' | 'pat' | 'other'

const routeMapping = {
  gera: 'Gera',
  silpvat: 'SlipVat',
  vichagarn: 'Vichagarn',
  pat: 'Pat',
  other: 'Other',
}

export const useThemeHooks = () => {
  const router = useRouter()
  const themeStore = useThemeStore()
  const params = router.currentRoute.value.params.type as string

  const key = params.toLowerCase() as IRoute

  if (!Object.keys(routeMapping).includes(key)) {
    router.push('/')
    return 'Other' as ThemeOption
  }
  else {
    themeStore.setNewTheme(routeMapping[key] as ThemeOption)
    return routeMapping[key] as ThemeOption
  }
}
