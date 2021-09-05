import { useRouter } from 'vue-router'
import { geelaRoutes, otherRoutes, patRoutes, slipVatRoutes, wichakarnRoutes } from './routes'
import { RouteCategoryOption } from '~/types'

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
