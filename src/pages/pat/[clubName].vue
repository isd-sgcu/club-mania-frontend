<template>
  <ClubPage :club-name="props.clubName" />
</template>

<script setup lang="ts">
const props = defineProps<{
  clubName: string
}>()
</script>
