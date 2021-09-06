<template>
  <div class="<sm:(space-x-2) space-x-3 flex flex-wrap items-center">
    <h2 class="text-[24px] font-Roboto inline">
      {{ publisherName }}
    </h2>
    <Badge v-if="publisherBadge" :badge-text="publisherBadge" />
    <span class="<sm:(hidden)">{{ postedDate }}</span>
  </div>
  <span class="sm:(hidden)">{{ postedDate }}</span>
</template>

<script setup lang="ts">
import { DocumentReference, getDoc, Timestamp } from 'firebase/firestore'
import { MemberDoc } from '~/firestore'

const props = defineProps<{
  publisher: string | DocumentReference
  createdAt: Timestamp
}>()

const publisherName = ref('...')
const publisherBadge = ref<string | null>(null)

const postedDate = props.createdAt.toDate()

onMounted(async() => {
  if (typeof props.publisher === 'string') { publisherName.value = 'บุคคลนิรนาม' }
  else {
    const posterDoc = (await getDoc(props.publisher as DocumentReference)).data() as MemberDoc
    publisherName.value = posterDoc.name
    publisherBadge.value = posterDoc.badge ?? null
  }
})
</script>
