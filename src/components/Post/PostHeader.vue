<template>
  <div class="<sm:(space-x-1) flex flex-wrap items-center">
    <h2 class="text-20px font-Roboto inline sm:(mr-2 text-24px)">
      {{ props.publisher }}
    </h2>
    <Badge v-if="props.badge" class="sm:(mr-4)" :badge-text="props.badge" />
    <span class="<sm:(hidden)">{{ formattedCreatedAt }}</span>
  </div>
  <span class="sm:(hidden) text-13px">{{ formattedCreatedAt }}</span>
</template>

<script setup lang="ts">
import { Timestamp } from 'firebase/firestore'
import moment from 'moment'

const props = defineProps<{
  publisher: string // name of the publisher
  createdAt: Timestamp
  badge: string | null // The badge of the member, null if the poster is not a club member
}>()

const formattedCreatedAt = ref('...')
const formatInterval = ref(0)

const postedDate = props.createdAt.toDate()

const getDisplayTime = (datetime: Date) => {
  moment.locale()
  return moment(datetime).fromNow()
}

const setFormattedCreatedAt = () => {
  formattedCreatedAt.value = getDisplayTime(postedDate)
}

onMounted(async() => {
  setFormattedCreatedAt()
  setInterval(() => {
    setFormattedCreatedAt()
  }, 60000 /* 60s */)
})

onUnmounted(() => {
  clearInterval(formatInterval.value)
})
</script>
