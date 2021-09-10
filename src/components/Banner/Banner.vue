
<!---- Created by Kaoklong ---->
<!-- Last Updated by Kaoklong -->

<template>
  <div class="club-banner" :class="{'md:items-center justify-center': !isClub}" @click="directTo">
    <img :src="(isClub) ? ClubBanner[theme] : MobileBanner[theme]" :alt="theme + 'mobile'" class="bg-cover w-full h-140px md:hidden">
    <img :src="(isClub) ? ClubBanner[theme] : CategoryBanner[theme]" :alt="theme" class="<md:hidden bg-cover w-full h-260px lg:(min-h-312px h-auto max-h-500px)">
    <span v-if="theme === 'Gera'" class="gera-glow" :class="isClub ? textPosInClubPage : '<md:bottom-10'">
      <p class="gera-border">
        {{ displayText }}
      </p>
    </span>
    <div v-else-if="theme === 'SilpVat'" class="silpvat-glow" :class="isClub ? textPosInClubPage : '<md:bottom-10'">
      <p class="outer">
        {{ displayText }}
      </p>
      <p class="inner">
        {{ displayText }}
      </p>
    </div>
    <p class="absolute" :class="isClub ?`font-${theme} ` + textPosInClubPage: `font-${theme} <md:bottom-10`" :style="styleObject">
      {{ displayText }}
    </p>
  </div>
</template>

<script setup lang="ts">
// Route
import { useRouter } from 'vue-router'
import BannerRoute from './Route.json'

// Style
import TextStyle from './TextStyle.json'
import CatagoryText from './bannerText.json'

// Types
import { ThemeOption } from '~/types'

// Path
import { CategoryBanner, ClubBanner, MobileBanner } from '~/imagePath'

const props = defineProps<{
  theme: ThemeOption
  text?: string
  isClub: boolean
}>()

// Text to display in components
const displayText = computed(() => props.isClub ? props.text : CatagoryText[props.theme])
const styleObject: any = computed(() => TextStyle[props.theme])

const textPosInClubPage = 'md:(text-[48px] left-13/100 bottom-33/100) xl:text-[64px] left-2/25 bottom-1/5'
const router = useRouter()
const directTo = () => {
  if (props.isClub) return
  router.push({ path: BannerRoute[props.theme] })
}
</script>

<style>
.club-banner {
  @apply w-full relative flex;
}

.gera-glow {
  @apply absolute font-Gera text-stroke-3 md:text-stroke-5 xl:text-stroke-8 text-stroke-black;
  filter: drop-shadow(0px 0px 15px #DF322A);
}

.gera-border {
  filter: drop-shadow(0px 0px 1.5px #DE2727);
}

.silpvat-glow {
  @apply absolute font-SilpVat text-white;
  display: grid;
}

.silpvat-glow > * {
  grid-column: 1;
  grid-row: 1;
}
.silpvat-glow .outer {
  mix-blend-mode: hard-light;
  border: 5px solid #F5F5F5;
  filter: blur(76.9px);
}

.silpvat-glow .inner {
  mix-blend-mode: soft-light;
  filter: blur(20.6px);
}
</style>
