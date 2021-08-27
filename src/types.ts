import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// IMPORTANT some colors in Figma are named 'Vishagarn' not 'Vichagarn', so watchout if that's the case
export type ThemeOption = 'SilpVat' | 'Vichagarn' | 'Gera' | 'Pat' | 'Other' | 'Main'
