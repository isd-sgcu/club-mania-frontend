<template>
  <div class="flex flex-wrap">
    <PatCard v-for="item in patColor" :key="item" :color="item" img-url="https://dummyimage.com/500x500/5c205c/ffffff.png" text="เยาวชนจิตอาสา (Youth)" />
  </div>
  <div class="flex flex-wrap">
    <SlipvatCard text="ชมรมศิลปะการพูดและการแสดง" />
  </div>
  <div class="flex flex-wrap">
    <OtherCard v-for="item in cardColor" :key="item" :color="item" text="ชมรมศิลปะการพูดและการแสดง" />
  </div>
  <div class="flex flex-wrap">
    <GeraCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="ชมรม Hello World" />
  </div>
  <div class="flex flex-wrap">
    <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" dark />
    <VichagarnCard img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" text="Hello World" />
  </div>
  <div class="flex flex-wrap">
    <MainCard v-for="item in mainColor" :key="item" :type="item" text="ชมรมศิลปะการพูดและการแสดง" img-url="https://dummyimage.com/200x200/5c205c/ffffff.png" />
  </div>
</template>

<script setup lang="ts">
import { Variant } from '~/components/Card/Main/types'
import { GhostColorType } from '~/components/Card/Other/types'
import { PaletteKey } from '~/components/Card/Pat/types'

const cardColor = ['lightcyan', 'pink', 'red', 'steel', 'yellow'] as GhostColorType[]
const patColor = ['red', 'blue', 'yellow', 'green'] as PaletteKey[]
const mainColor = ['Gera', 'SilpVat', 'Pat', 'Vichagarn', 'Other'] as Variant[]

</script>
