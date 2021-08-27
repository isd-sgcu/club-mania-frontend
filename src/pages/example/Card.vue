<template>
  <div class="flex flex-wrap">
    <PatCard v-for="item in patColor" :key="item" :color="item" img-url="https://dummyimage.com/500x500/5c205c/ffffff.png" text="เยาวชนจิตอาสา (Youth)" />
  </div>
  <SlipvatCard dark text="ชมรมศิลปะการพูดและการแสดง" />
  <div class="flex flex-wrap">
    <OtherCard v-for="item in cardColor" :key="item" :color="item" text="ชมรมศิลปะการพูดและการแสดง" />
  </div>
  <div class="flex flex-wrap">
    <GeraCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="ชมรม Hello World" dark />
  </div>
  <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
</template>

<script setup lang="ts">
import { GhostColorType } from '~/components/Card/Other/types'
import { PaletteKey } from '~/components/Card/Pat/types'

const cardColor = ['darkblue', 'lightcyan', 'pink', 'red', 'steel', 'yellow'] as GhostColorType[]
const patColor = ['red', 'blue', 'yellow', 'green'] as PaletteKey[]

</script>
