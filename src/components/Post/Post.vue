<template>
  <BackgroundSection>
    <div class="space-y-3 relative">
      <!-- header -->
      <PostHeader :publisher="props.post.by" :posted-at="post.postedAt" />
      <!-- text of the post -->
      <TextFrame :value="post.text" :disabled="true">
        {{ post.text }}
      </TextFrame>
      <!-- like/reply buttons -->
      <div class="flex md:(space-x-1)">
        <LikeButton
          :fill-color="fillColor"
          :like-status="likeStatus"
          :likes="3"
          @toggle-like="onToggleLike"
        />
        <ReplyButton :fill-color="fillColor" @click="onReplyClicked" />
      </div>
      <hr v-if="replyActive" :style="{ borderColor: fillColor[themeStore.savedTheme] }" />
      <!-- new reply -->
      <transition name="flow" mode="out-in">
        <div v-if="replyActive" :class="commentMarginLeft">
          <NewReplyPost :is-anonymous="false" />
        </div>
      </transition>
      <!-- existing replies -->
      <div v-if="post.replies.length > 0">
        <div class="cursor-pointer" @click="toggleShowMore">
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block mr-3 transition-all"
            :style="{
              transform: showingMore ? '' : 'rotate(180deg)'
            }"
          >
            <path d="M0 6L6 0L12 6H0Z" :fill="`${fillColor[themeStore.savedTheme]}`" />
          </svg>
          <text-body2>{{ showingMore ? 'ซ่อนการตอบกลับ' : 'แสดงการตอบกลับ' }}</text-body2>
        </div>
      </div>
      <div v-if="showingMore" class="space-y-2">
        <div v-for="(reply, idx) in props.post.replies" :key="idx" :class="commentMarginLeft">
          <div class="space-y-2 pb-3">
            <PostHeader
              :publisher="reply.by"
              :posted-at="reply.repliedAt"
            />
            <TextFrame :disabled="true" :value="reply.text" />
            <div class="space-x-3 flex items-center">
              <LikeButton
                :fill-color="fillColor"
                :like-status="likeStatus"
                :likes="5"
                @toggle-like="onToggleLike"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { PostDoc, ReplyDoc } from '~/firestore'
import { useThemeStore } from '~/stores/themes'

const themeStore = useThemeStore()

const props = defineProps<{
  post: PostDoc
}>()

console.log(props.post.replies)

const likeStatus = ref(false)
const replyActive = ref(true)
const showingMore = ref(true)

const onReplyClicked = () => {
  replyActive.value = !replyActive.value
}
const onToggleLike = (like: boolean) => {
  likeStatus.value = like
}
const toggleShowMore = () => {
  showingMore.value = !showingMore.value
}

const commentMarginLeft = '<sm:(ml-3) ml-8 md:(ml-12) xl:(ml-16)'
// of like and reply buttons
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
.flow-enter-active,
.flow-leave-active {
  transition: opacity 0.5s ease;
}

.flow-leave-active {
  position: absolute;
}

.flow-enter-from,
.flow-leave-to {
  opacity: 0;
}
</style>
