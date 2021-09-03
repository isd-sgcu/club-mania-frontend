<template>
  <div class="<sm:(space-x-2) space-x-3 flex flex-wrap items-center">
    <h2 class="text-[24px] font-Roboto inline">
      {{ publisherName }}
    </h2>
    <Badge v-if="badge" :badge-text="badge" />
    <span class="<sm:(hidden)">{{ postedDate }}</span>
  </div>
  <span class="sm:(hidden)">{{ postedDate }}</span>
</template>

<script setup lang="ts">
import { DocumentReference, getDoc, Timestamp } from 'firebase/firestore'
import { MemberDoc } from '~/firestore'

const props = defineProps<{
  publisher: string | DocumentReference
  badge?: string
  postedAt: Timestamp
}>()

const publisherName = ref('...')

const postedDate = props.postedAt.toDate()

onMounted(async() => {
  if (props.publisher instanceof String)
    publisherName.value = 'บุคคลนิรนาม'
  else
    publisherName.value = ((await getDoc(props.publisher as DocumentReference)).data() as MemberDoc).name
})
</script>

<style>
</style>
