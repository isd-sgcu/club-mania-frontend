<template>
  <div
    class="w-[200px]"
    :style="{filter: `drop-shadow(0px 0px 4px ${CardBorder})`, border: `3px solid ${CardBorder}`, borderRadius: '8px' }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseOut"
  >
    <div class="w-full p-3 rounded-tl-md rounded-tr-md" style="background: linear-gradient(160.98deg, #130000 0%, #7B7B7B 34.44%, #130000 68.49%);">
      <img :src="imgUrl">
    </div>
    <div class="w-full text-white p-4 pt-2 text-center rounded-bl-md rounded-br-md" :style="{ background: CardBackground + 'linear-gradient(138.79deg, #130000 70%, #4F4F4F 85%, #130000 100%)'}">
      <text-sub2>{{ text }}</text-sub2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Variant } from './types'
import CardVariant from './card.json'

interface IProps {
  type?: Variant
  text: string
  imgUrl: string
}

const props = defineProps<IProps>()
const CardBackground = ref('')
const CardBorder = CardVariant.border[props.type || 'Others']

const handleMouseEnter = () => {
  CardBackground.value = `${CardVariant.bg[props.type || 'Others']}, `
}

const handleMouseOut = () => {
  CardBackground.value = ''
}
</script>
