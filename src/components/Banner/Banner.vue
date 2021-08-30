
<!---- Created by Kaoklong ---->
<!-- Last Updated by Kaoklong -->

<template>
  <div class="relative flex items-center justify-center">
    <img :src="BannerBackground[theme]" :alt="theme" class="bg-cover h-8/25 min-h-160px md:min-h-280px max-h-312px 2xl:(min-h-330px max-h-600px)">
    <span v-if="theme === 'Gera'" class="gera-glow">
      <p class="gera-border">
        {{ displayText }}
      </p>
    </span>
    <div v-else-if="theme === 'SilpVat'" class="silpvat-glow">
      <p class="outer">
        {{ displayText }}
      </p>
      <p class="inner">
        {{ displayText }}
      </p>
    </div>
    <p class="absolute" :class="`font-${theme}`" :style="styleObject">
      {{ displayText }}
    </p>
  </div>
</template>

<script setup lang="ts">
// Types
import TextStyle from './bannerText.json'
import { ThemeOption } from '~/types'
import { BannerBackground } from '~/imagePath'

const props = defineProps<{
  theme: ThemeOption
  text?: string
  isClub: boolean
}>()

// This text is displayed when an user is in a landing, catagory page
// When an user is a club page, just show the text prop
const CatagoryText = {
  Main: 'Club Mania 2021',
  Vichagarn: 'ฝ่ายวิชาการ',
  Gera: 'ฝ่ายกีฬา',
  SilpVat: 'ฝ่ายศิลป์วัฒน์',
  Pat: 'ฝ่ายพัฒน์',
  Other: 'ฝ่ายอื่นๆ',
}
// Text to display in components
const displayText = props.isClub ? props.text : CatagoryText[props.theme]
const styleObject: any = TextStyle[props.theme]
</script>

<style>
.gera-glow {
  @apply absolute font-Gera md:font-700 text-stroke-3 md:text-stroke-5 xl:text-stroke-8 text-stroke-black;
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
