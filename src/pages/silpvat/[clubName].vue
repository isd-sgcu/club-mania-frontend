<template>
  <ClubPage :club-name="props.clubName" :category="category" />
</template>

<script setup lang="ts">
import { goToCategoryIfNotValid } from '~/components/pages/club/validateRoute'
import { RouteCategoryOption } from '~/types'

const props = defineProps<{
  clubName: string
}>()

const category: RouteCategoryOption = 'silpvat'
goToCategoryIfNotValid(props.clubName, category)
</script>
