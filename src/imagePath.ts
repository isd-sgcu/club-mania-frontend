import MainBanner from '~/assets/Banners/banner-Main.png'
import VichagarnBanner from '~/assets/Banners/banner-Vichagarn.png'
import GeraBanner from '~/assets/Banners/banner-Gera.png'
import SlipVatBanner from '~/assets/Banners/banner-SilpVat.png'
import PatBanner from '~/assets/Banners/banner-Pat.png'
import OtherBanner from '~/assets/Banners/banner-Other.png'

import GeraClubBanner from '~/assets/Banners/banner-club-Gera.png'
import VichagarnClubBanner from '~/assets/Banners/banner-club-Vichagarn.png'
import SilpVatClubBanner from '~/assets/Banners/banner-club-SilpVat.png'
import dummyImage from '~/assets/Banners/No_Image.png'

import iconWhite from '~/assets/icons/icon_white.png'
import iconYellow from '~/assets/icons/icon_yellow.png'
import iconViolet from '~/assets/icons/icon_violet.png'

export const CategoryBanner = {
  Main: MainBanner,
  Vichagarn: VichagarnBanner,
  Gera: GeraBanner,
  SilpVat: SlipVatBanner,
  Pat: PatBanner,
  Other: OtherBanner,
}

export const ClubBanner = {
  Main: dummyImage,
  Vichagarn: VichagarnClubBanner,
  Gera: GeraClubBanner,
  SilpVat: SilpVatClubBanner,
  Pat: PatBanner,
  Other: OtherBanner,
}

export const PageIcon = {
  Main: iconWhite,
  Vichagarn: iconYellow,
  Gera: iconViolet,
  SilpVat: iconYellow,
  Pat: iconViolet,
  Other: iconYellow,
}
