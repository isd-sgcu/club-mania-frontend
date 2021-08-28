<template>
  <div class="flex items-center space-x-3">
    <h2 class="text-[24px] font-Roboto inline">
      {{ publisher }}
    </h2>
    <Badge v-if="badge" :badge-text="badge" />
    <span>{{ postedAt }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  publisher: string
  badge?: string
  postedAt: string
}>()
</script>

<style>
</style>
