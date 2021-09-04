import { useRouter } from 'vue-router'
import { RouteCategoryOption } from '~/types'

// register valid club names
export const geelaClubNames = new Set<string>([
  'tennis',
])
export const slipVatClubNames = new Set<string>([
  '',
])
export const wichakarnClubNames = new Set<string>([
  '',
])
export const otherClubNames = new Set<string>([
  '',
])
export const patClubNames = new Set<string>([
  '',
])

export const validateRoute = (route: string, validRoutes: Set<string>) => {
  return validRoutes.has(route)
}

export const goToCategoryIfNotValid = (clubName: string, category: RouteCategoryOption) => {
  let clubNames: Set<string>

  if (category === 'geela')
    clubNames = geelaClubNames
  else if (category === 'other')
    clubNames = otherClubNames
  else if (category === 'pat')
    clubNames = patClubNames
  else if (category === 'slipvat')
    clubNames = slipVatClubNames
  else clubNames = wichakarnClubNames

  if (!validateRoute(clubName, clubNames)) {
    const router = useRouter()
    router.push(`/${category}`)
  }
}
