<template>
  <div
    class="h-[64px] text-white backdrop-blur-14px w-full px-[32px] py-[17.45px] bottom-0"
    :class="`bg-[${color}]`"
  >
    <h5>{{ t("footer.text") }}</h5>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ThemeOption } from '~/types'
const { t } = useI18n()

const props = defineProps<{
  theme: ThemeOption
}>()

const bgColors = {
  Vichakarn: '#0C233F',
  Silpvat: '#1B0D31',
  Gera: '#560000',
  Pat: '#914D1A',
  Other: '#000D39',
}

const color = props.theme ? bgColors.Vichakarn : '#0C0C0C'
</script>

<style>
</style>
