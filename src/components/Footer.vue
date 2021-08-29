<template>
  <div
    class="h-10 text-white w-full px-7 py-4 flex items-center"
    :class="`bg-footer-${options}`"
  >
    <h5 class="text-lg">{{ t("footer.text") }}</h5>
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
