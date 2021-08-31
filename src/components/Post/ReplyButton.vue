<template>
  <div
    class="p-1 sm:(p-2) md:(p-3) cursor-pointer space-x-3 rounded-lg  bg-opacity-0 active:bg-opacity-25 hover:bg-opacity-50"
    :class="`bg-textbox-${props.theme ?? themeStore.savedTheme}`"
  >
    <svg
      class="transform scale-90 inline-block md:(scale-100)"
      :class="`${themeStore.savedTheme === 'Pat' ? 'active:fill-black' : 'active:fill-white'}`"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7063 18.4464H13.5457L13.4152 18.5399L6.68149 23.361C6.56934 23.4413 6.43802 23.4886 6.30192 23.4982C6.16582 23.5078 6.0295 23.4794 5.90773 23.4159C5.78591 23.3523 5.68302 23.2558 5.61084 23.1361C5.53871 23.0166 5.50021 22.8789 5.5 22.7381C5.5 22.738 5.5 22.7378 5.5 22.7377L5.5 18.9464V18.4464H5H4.0625C3.11936 18.4464 2.21378 18.0679 1.54527 17.3924C0.876586 16.7167 0.5 15.7991 0.5 14.8414V4.10505C0.5 3.14726 0.876586 2.22974 1.54527 1.55405C2.21378 0.878537 3.11936 0.5 4.0625 0.5H20.9375C21.4046 0.5 21.8673 0.592961 22.2991 0.773708C22.731 0.95446 23.1237 1.21953 23.4547 1.55405C23.7858 1.88858 24.0487 2.286 24.2281 2.72376C24.4076 3.16153 24.5 3.63091 24.5 4.10505V14.8414C24.5 15.3155 24.4076 15.7849 24.2281 16.2226C24.0487 16.6604 23.7858 17.0578 23.4547 17.3924C23.1237 17.7269 22.731 17.9919 22.2991 18.1727C21.8673 18.3534 21.4046 18.4464 20.9375 18.4464H13.7063Z"
        :stroke="fillColor[decidedTheme]"
      />
    </svg>
    <span class="font-Roboto text-sm">{{ 'ตอบกลับ' }}</span>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const themeStore = useThemeStore()

const props = defineProps<{
  theme?: ThemeOption
  fillColor: {
    SilpVat: string
    Vichagarn: string
    Gera: string
    Pat: string
    Other: string
    Main: string
  }
}>()

const decidedTheme = props.theme ?? themeStore.savedTheme
</script>
