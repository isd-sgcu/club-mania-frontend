<template>
  <div>
    <Banner :theme="themeStore.savedTheme" :is-club="false" />
    <div class=" w-full flex flex-col items-center py-12 ">
      <CategoryTable v-if="themeStore.savedTheme === 'Pat'">
        <PatCard
          v-for="(item, index) in data"
          :key="index"
          :href="item.href"
          :text="item.text"
          :img-url="item.imgUrl"
          :color="item.colorPat || 'red'"
        />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'SilpVat'">
        <SilpvatCard v-for="(item, index) in data" :key="index" :href="item.href" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Other'">
        <OtherCard
          v-for="(item, index) in data"
          :key="index"
          :href="item.href"
          :text="item.text"
          :img-url="item.imgUrl"
          :color="item.colorOther || 'lightcyan'"
        />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Gera'">
        <GeraCard v-for="(item, index) in data" :key="index" :href="item.href" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
      <CategoryTable v-if="themeStore.savedTheme === 'Vichagarn'">
        <VichagarnCard v-for="(item, index) in data" :key="index" :href="item.href" :text="item.text" :img-url="item.imgUrl" />
      </CategoryTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { GhostColorType } from '~/components/Card/Other/types'
import { PaletteKey } from '~/components/Card/Pat/types'
import { useThemeStore } from '~/stores/themes'
const themeStore = useThemeStore()

interface IClubCard {
  text: string
  imgUrl: string
  href: string
  colorPat?: PaletteKey
  colorOther?: GhostColorType
}

interface IProps {
  data: IClubCard[]
}

defineProps<IProps>()

// dynamic favicon
if (themeStore.savedTheme === 'Pat')
  useFavicon('/favicon-light.svg')
else useFavicon('/favicon-dark.svg')

</script>
