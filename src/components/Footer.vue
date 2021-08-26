<template>
  <div
    class="h-[64px] text-white backdrop-blur-14px
          w-full px-[32px] py-[17.45px] bottom-0"
    style="background: rgba(0, 0, 0, 0.6);"
  >
    <h5>{{ t("footer.text") }}</h5>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style>
</style>
