<template>
  <div class="h-[64px] text-white bg-purple-900++ w-full px-[32px] py-[17.45px]">
    <h5>{{ t("footer.text") }}</h5>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style>
</style>
