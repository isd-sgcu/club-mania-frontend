import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// IMPORTANT some colors in Figma are named 'Vishagarn' not 'Vichagarn', so watchout if that's the case
export type ThemeOption = 'SilpVat' | 'Vichagarn' | 'Gera' | 'Pat' | 'Other' | 'Main'

export type Post = {
  id: string
  publisher: string // later should be user type
  text: string
  badge?: string
  likes: number
  postedAt: string // should be datetime
  replies: {
    id: string
    publisher: string // later should be user type
    repliedAt: string // should be datetime
    likes: number
    text: string
    badge?: string
  }[]
}
