<template>
  <div
    class="space-x-2 w-full px-7 py-2 flex items-center text-white"
    :class="`bg-footer-${themeStore.savedTheme}`"
  >
    <img class="h-5" src="/isd.svg" />
    <span>สงวนลิขสิทธิ์</span>
    <img class="h-4" src="/copyright.svg">
    <span class="font-Roboto text-md">
      {{ t("footer.text") }}
    </span>
    <span class="flex-grow"></span>
    <span class="space-x-3">
      <img class="h-5 inline" src="/ig.svg">
      <img class="h-5 inline" src="/fb.svg">
    </span>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/stores/themes'
const { t } = useI18n()
const themeStore = useThemeStore()
</script>
