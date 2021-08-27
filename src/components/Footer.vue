<template>
  <div
    class="h-[64px] text-white w-full px-[32px] py-[17.45px] bottom-0"
    :class="`bg-footer-${options}`"
  >
    <h5>{{ t("footer.text") }}</h5>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
const { t } = useI18n()
const themeStore = useThemeStore()

const props = defineProps<{
  theme?: ThemeOption
}>()

const options = props.theme ?? themeStore.savedTheme
</script>
