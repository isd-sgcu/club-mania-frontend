
<!---- Created by Kaoklong ---->
<!-- Last Updated by Kaoklong -->

<template>
  <img :src="BannerBackground[theme]" :alt="theme" class="bg-cover h-8/25 max-h-312px 2xl:(min-h-348px max-h-600px)">
  <p class="absolute" :class="`font-${theme}`">
    {{ displayText }}
  </p>
</template>

<script setup lang="ts">
// Types
import { ThemeOption } from '~/types'
import { BannerBackground } from '~/imagePath'

const props = defineProps<{
  theme: ThemeOption
  text?: string
  isClub: boolean
}>()

// This text is displayed when an user is in a landing, catagory page
// When an user is a club page, just show the text prop
const ClubCatagory = {
  Main: 'Club Mania 2021',
  Vichagarn: 'ฝ่ายวิชาการ',
  Gera: 'ฝ่ายกีฬา',
  SilpVat: 'ฝ่ายศิลป์วัฒน์',
  Pat: 'ฝ่ายพัฒน์',
  Other: 'ฝ่ายอื่นๆ',
}
// Text to display in components
const displayText = props.isClub ? props.text : ClubCatagory[props.theme]
</script>

<style>

</style>
