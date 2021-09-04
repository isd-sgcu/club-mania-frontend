<template>
  <ClubPage :club-name="props.clubName" />
</template>

<script setup lang="ts">
import { goToCategoryIfNotValid } from '~/components/pages/club/validateRoute'

const props = defineProps<{
  clubName: string
}>()

goToCategoryIfNotValid(props.clubName, 'slipvat')
</script>
