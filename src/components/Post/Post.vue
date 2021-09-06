<template>
  <BackgroundSection>
    <div class="space-y-3 relative">
      <!-- close icon -->
      <div v-show="showDeleteIcon" @click="emitDelete">
        <svg
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
          class="absolute top-[2px] right-[2px] cursor-pointer"
        >
          <path
            d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z"
            :fill="discardColor[themeStore.savedTheme]"
          />
        </svg>
      </div>
      <!-- header -->
      <PostHeader v-if="postDoc" :publisher="postDoc.name" :created-at="postDoc.createdAt" :badge="postDoc.badge" />
      <!-- text of the post -->
      <TextFrame v-if="postDoc" :value="postDoc.text" :disabled="true">
        {{ postDoc.text }}
      </TextFrame>
      <!-- like/reply buttons -->
      <div class="flex md:(space-x-1)">
        <LikeButton
          :fill-color="fillColor"
          :like-status="likeStatus"
          :likes="postDoc ? postDoc.likes : []"
          :post-ref="props.post"
        />
        <ReplyButton :fill-color="fillColor" @click="onReplyClicked" />
      </div>
      <hr v-if="replyActive" :style="{ borderColor: fillColor[themeStore.savedTheme] }" />
      <!-- new reply -->
      <transition name="flow" mode="out-in">
        <div v-if="replyActive" :class="commentMarginLeft">
          <NewReplyPost @submit="reply" />
        </div>
      </transition>
      <!-- existing replies -->
      <div v-if="postDoc && postDoc.replies.length > 0">
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
      <div v-if="showingMore && postDoc" class="space-y-2">
        <div v-for="(reply, idx) in postDoc.replies" :key="idx" :class="commentMarginLeft">
          <div class="space-y-2 pb-3">
            <PostHeader :publisher="reply.name" :created-at="reply.createdAt" :badge="postDoc.badge" />
            <TextFrame :disabled="true" :value="reply.text" />
          </div>
        </div>
      </div>
    </div>
  </BackgroundSection>
</template>

<script setup lang="ts">
import { DocumentReference, onSnapshot, Unsubscribe, updateDoc, arrayUnion } from 'firebase/firestore'
import { PostDoc, ReplyDoc } from '~/firestore'
import { useThemeStore } from '~/stores/themes'
import { getAnonymousId, getNewReplyDoc } from '~/utils'
import { AnonymousName } from '~/types'
import { auth } from '~/firebase'
import { useUserStore } from '~/stores/user'

const themeStore = useThemeStore()
const userStore = useUserStore()

const props = defineProps<{
  post: DocumentReference
  clubName: string // as in route
}>()

const emit = defineEmits<{
  (e: 'delete', postRef: DocumentReference): void
}>()

const likeStatus = ref(false)
const replyActive = ref(false)
const showingMore = ref(true)
const postDoc = ref<PostDoc | null>(null)
const unsubPost = ref<Unsubscribe | null>(null)
const showDeleteIcon = ref(false)

const decideShowDeleteIcon = () => {
  if (userStore.isMember(props.clubName)) {
    showDeleteIcon.value = true
    return
  }

  const user = auth.value!.currentUser
  if (!user)
    showDeleteIcon.value = postDoc.value!.by === getAnonymousId()
  else
    showDeleteIcon.value = postDoc.value!.by === user.email
}

const onReplyClicked = () => {
  replyActive.value = !replyActive.value
}
const toggleShowMore = () => {
  showingMore.value = !showingMore.value
}

const reply = async(text: string, customName: string | AnonymousName = 'บุคคลนิรนาม', asAnonymous: boolean) => {
  const replyDoc: ReplyDoc = getNewReplyDoc(text, asAnonymous ? 'บุคคลนิรนาม' : customName)
  updateDoc(props.post, {
    replies: arrayUnion(replyDoc),
  })
}

const emitDelete = () => {
  emit('delete', props.post)
}

onMounted(() => {
  const unsub = onSnapshot(props.post, (snap) => {
    postDoc.value = snap.data() as PostDoc
    decideShowDeleteIcon()
  })
  unsubPost.value = unsub
})

onUnmounted(() => unsubPost.value!())

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
const discardColor = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: 'black',
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
