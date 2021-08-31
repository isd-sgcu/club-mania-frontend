<template>
  <div class="<sm:(space-x-2) space-x-3 flex flex-wrap items-center">
    <h2 class="text-[24px] font-Roboto inline">
      {{ publisher }}
    </h2>
    <Badge v-if="badge" :badge-text="badge" />
    <span class="<sm:(hidden)">{{ postedAt }}</span>
  </div>
  <span class="sm:(hidden)">{{ postedAt }}</span>
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
