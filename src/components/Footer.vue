<template>
  <div
    class="<md:(hidden) space-x-2 w-full px-7 py-2 flex items-center text-white"
    :class="`bg-footer-${themeStore.savedTheme}`"
  >
    <img class="h-5" src="/isd.svg" />
    <span>สงวนลิขสิทธิ์</span>
    <img class="h-4" src="/copyright.svg" />
    <span class="font-Roboto text-md">{{ t("footer.text") }}</span>
    <span class="flex-grow"></span>
    <span class="space-x-3">
      <a :href="igLink" target="_blank">
        <img class="h-5 inline" src="/ig.svg" />
      </a>
      <a :href="fbLink" target="_blank">
        <img class="h-5 inline" src="/fb.svg" />
      </a>
    </span>
  </div>
  <div
    class="<xs:(p-4) md:(hidden) p-6 flex flex-col items-start text-white font-Roboto"
    :class="`bg-footer-${themeStore.savedTheme}`"
  >
    <span class="<xs:(space-x-0) space-x-2 mb-5">
      <div class="<xs:(block) inline space-x-2">
        <img class="h-5 inline" src="/isd.svg" />
        <span class="<sm:(text-xs) <md:(text-sm)">สงวนลิขสิทธิ์</span>
      </div>
      <div class="xs:(inline) space-x-2">
        <img class="h-4 inline" src="/copyright.svg" />
        <span class="<sm:(text-xs) <md:(text-sm) font-Roboto text-md">
          องค์การบริหารสโมสรนิสิต
          <br class="xs:(hidden)" />จุฬาลงกรณ์มหาวิทยาลัย (อบจ.)
        </span>
      </div>
    </span>
    <div class="<xs:(space-y-2) space-y-3">
      <div class="flex items-center space-x-3">
        <a :href="igLink" target="_blank">
          <img class="h-5 inline" src="/ig.svg" />
        </a>
        <span class="<sm:(text-xs) <md:(text-sm)">CLUB MANIA</span>
      </div>
      <div class="flex items-center space-x-3">
        <a :href="fbLink" target="_blank">
          <img class="h-5 inline" src="/fb.svg" />
        </a>
        <span class="<sm:(text-xs) <md:(text-sm)">SGCU CHULA</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/stores/themes'
const { t } = useI18n()
const themeStore = useThemeStore()

const igLink = '#'
const fbLink = '#'
</script>
