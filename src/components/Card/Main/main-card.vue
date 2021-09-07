<template>
  <div
    class="max-w-[200px] h-full transition-all cursor-pointer flex flex-col "
    :style="{filter: `drop-shadow(0px 0px ${borderWidth} ${CardBorder})`, border: `${borderWidth} solid ${CardBorder}`, borderRadius: '8px' }"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseOut"
  >
    <div class="p-3 h-[200px] rounded-tl-md rounded-tr-md h-full max-h-[200px]" style="background: linear-gradient(160.98deg, #130000 0%, #7B7B7B 34.44%, #130000 68.49%);">
      <img class="bg-white h-full object-contain" :src="imgUrl || 'https://dummyimage.com/200x200/5c205c/ffffff.png'">
    </div>
    <div class="flex justify-center flex-1 items-center break-words content-start text-white p-4 pt-2 text-center rounded-bl-md rounded-br-md" :style="{ background: CardBackground + 'linear-gradient(138.79deg, #130000 70%, #4F4F4F 85%, #130000 100%)' }">
      <text-sub2>{{ text }}</text-sub2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Variant } from './types'
import CardVariant from './card.json'

interface IProps {
  type?: Variant
  text: string
  imgUrl: string
  href?: string
}

const router = useRouter()
const props = defineProps<IProps>()
const CardBackground = ref('')
const CardBorder = CardVariant.border[props.type || 'Other']
const borderWidth = ref('3px')

const handleMouseEnter = () => {
  borderWidth.value = '5px'
  CardBackground.value = `${CardVariant.bg[props.type || 'Other']}, `
}

const handleMouseOut = () => {
  borderWidth.value = '2px'
  CardBackground.value = ''
}

const handleClick = () => {
  router.push(props.href || '#')
}
</script>
