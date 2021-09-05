import { useRouter } from 'vue-router'
import { RouteCategoryOption } from '~/types'

// register valid club names
export const geelaRoutes = new Set<string>([
  'tennis',
])
export const slipVatRoutes = new Set<string>([
  '',
])
export const wichakarnRoutes = new Set<string>([
  '',
])
export const otherRoutes = new Set<string>([
  '',
])
export const patRoutes = new Set<string>([
  '',
])

export const validateRoute = (route: string, validRoutes: Set<string>) => {
  return validRoutes.has(route)
}

export const goToCategoryIfNotValid = (clubName: string, category: RouteCategoryOption) => {
  let clubNames: Set<string>

  if (category === 'geela')
    clubNames = geelaRoutes
  else if (category === 'other')
    clubNames = otherRoutes
  else if (category === 'pat')
    clubNames = patRoutes
  else if (category === 'slipvat')
    clubNames = slipVatRoutes
  else clubNames = wichakarnRoutes

  if (!validateRoute(clubName, clubNames)) {
    const router = useRouter()
    router.push(`/${category}`)
  }
}
