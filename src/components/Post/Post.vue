<template>
  <BackgroundSection>
    <div class="space-y-3">
      <div class="flex items-center space-x-3">
        <h2 class="text-[24px] font-Roboto inline">{{ post.publisher }}</h2>
        <Badge :badge-text="post.badge" />
        <span>{{ post.postedAt }}</span>
      </div>
      <TextFrame :value="post.text" :disabled="true">{{ post.text }}</TextFrame>
      <div class="space-x-3 flex items-center">
        <LikeButton :like-status="likeStatus" @toggle-like="(like) => likeStatus = like" />
        <span>{{ post.likes > 0 ? post.likes : ''}}</span>
      </div>
    </div>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { Post } from '~/types'

defineProps<{
  post: Post
}>()

const likeStatus = ref(false)


const fillColor = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: '#5B3112',
  Other: 'white',
  Main: 'white',
}
</script>
<style>
</style>
