import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// IMPORTANT some colors in Figma are named 'Vishagarn' not 'Vichagarn' so watchout if that's the case
export type ThemeOption = 'SilpVat' | 'Vichagarn' | 'Gera' | 'Pat' | 'Other' | 'Main'

export type RouteCategoryOption = 'geela' | 'pat' | 'other' | 'slipvat' | 'wichakarn'

export type ClubStaticInfo = {
  name: string
  category: string
  about: string
  whatToExpect: string
  recruitmentPeriod: string
  contact: string
}
