<template>
  <router-link
    :to="embedLink"
    class="cursor-pointer hover:bg-grey-primary px-6 my-3 md:(flex max-h-120px bg-white p-4 my-0 hover:bg-grey-light)"
  >
    <img :src="image ?? placeholder" class="min-w-18 w-18 h-auto lg:(w-22 h-auto) <md:hidden" />
    <div class="px-3 md:(flex flex-col justify-center)">
      <p class="font-Mitr max-w-44 text-white font-300 text-[10px] leading-[16px] md:hidden">
        {{ name }}
      </p>
      <text-sub2 class="text-purple-700 max-w-65 <md:hidden <lg:text-[18px]">
        {{ name }}
      </text-sub2>
      <text-body2 class=" <md:hidden <lg:text-[10px]">
        {{ textMap.get(description) }}
      </text-body2>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { placeholder } from '~/imagePath'
defineProps<{
  name: string
  description: string
  image?: string
  embedLink: string
}>()

const textMap = new Map<string, string>()
textMap.set('wichakarn', 'ฝ่ายวิชาการ')
textMap.set('pat', 'ฝ่ายพัฒนาสังคมและบำเพ็ญประโยชน์')
textMap.set('silpvat', 'ฝ่ายศิลปวัฒนธรรม')
textMap.set('geela', 'ฝ่ายกีฬา')
textMap.set('other', 'ชมรมอื่นๆ')
</script>
