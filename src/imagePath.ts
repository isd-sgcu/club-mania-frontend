import MainBanner from '/Banners/banner-Main.png'
import VichagarnBanner from '/Banners/banner-Vichagarn.png'
import GeraBanner from '/Banners/banner-Gera.png'
import SlipVatBanner from '/Banners/banner-SilpVat.png'
import PatBanner from '/Banners/banner-Pat.png'
import OtherBanner from '/Banners/banner-Other.png'

import GeraClubBanner from '/Banners/banner-club-Gera.png'
import VichagarnClubBanner from '/Banners/banner-club-Vichagarn.png'
import SilpVatClubBanner from '/Banners/banner-club-SilpVat.png'
import dummyImage from '/Banners/No_Image.png'

import iconWhite from '/icons/icon_white.png'
import iconYellow from '/icons/icon_yellow.png'
import iconViolet from '/icons/icon_violet.png'

import MainMobile from '/Banners/mobile-Main.png'
import VichagarnMobile from '/Banners/mobile-Vichagarn.png'
import GeraMobile from '/Banners/mobile-Gera.png'
import SlipVatMobile from '/Banners/mobile-Silpvat.png'
import PatMobile from '/Banners/mobile-Pat.png'
import OtherMobile from '/Banners/mobile-Other.png'

export type ImageBundle = {
  Main: string
  Vichagarn: string
  Gera: string
  SilpVat: string
  Pat: string
  Other: string
}

export const CategoryBanner: ImageBundle = {
  Main: MainBanner,
  Vichagarn: VichagarnBanner,
  Gera: GeraBanner,
  SilpVat: SlipVatBanner,
  Pat: PatBanner,
  Other: OtherBanner,
}

export const ClubBanner: ImageBundle = {
  Main: dummyImage,
  Vichagarn: VichagarnClubBanner,
  Gera: GeraClubBanner,
  SilpVat: SilpVatClubBanner,
  Pat: PatBanner,
  Other: OtherBanner,
}

export const MobileBanner: ImageBundle = {
  Main: MainMobile,
  Vichagarn: VichagarnMobile,
  Gera: GeraMobile,
  SilpVat: SlipVatMobile,
  Pat: PatMobile,
  Other: OtherMobile,
}

export const PageIcon: ImageBundle = {
  Main: iconWhite,
  Vichagarn: iconYellow,
  Gera: iconViolet,
  SilpVat: iconYellow,
  Pat: iconViolet,
  Other: iconYellow,
}
