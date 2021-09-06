<template>
  <LikeReplyContainer @click="toggle">
    <svg
      width="23"
      height="24"
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="cursor-pointer inline-block transform scale-60 md:(scale-80)"
    >
      <path
        d="M22.2496 12.6334C22.7326 11.9869 23 11.1948 23 10.3706C23 9.06299 22.2784 7.82528 21.1169 7.13507C20.8179 6.95741 20.4774 6.8639 20.1308 6.86423H13.2365L13.409 3.28506C13.4493 2.42011 13.1474 1.59886 12.5609 0.972718C12.273 0.6641 11.9258 0.418552 11.5406 0.251249C11.1554 0.0839457 10.7404 -0.0015581 10.3212 2.1493e-05C8.82625 2.1493e-05 7.50375 1.01931 7.107 2.47836L4.63737 11.5355H4.62875V24H18.2074C18.4719 24 18.7306 23.9476 18.9692 23.8427C20.3377 23.2515 21.2204 21.8973 21.2204 20.3946C21.2204 20.0277 21.1686 19.6665 21.0651 19.3171C21.5481 18.6706 21.8155 17.8784 21.8155 17.0542C21.8155 16.6873 21.7638 16.3262 21.6602 15.9767C22.1432 15.3302 22.4106 14.538 22.4106 13.7139C22.4049 13.3469 22.3531 12.9829 22.2496 12.6334ZM0 12.4674V23.0681C0 23.5835 0.411125 24 0.92 24H2.78875V11.5355H0.92C0.411125 11.5355 0 11.952 0 12.4674Z"
        :fill="likeStatus ? fillColor[decidedTheme] : ''"
        :stroke="fillColor[decidedTheme]"
      />
    </svg>
    <span class="font-Roboto text-sm">{{ props.likes.length }}</span>
  </LikeReplyContainer>
</template>

<script setup lang="ts">
import { arrayRemove, arrayUnion, DocumentReference, increment, updateDoc } from 'firebase/firestore'
import { auth } from '~/firebase'
import { AnonymousId, Email } from '~/firestore'
import { useThemeStore } from '~/stores/themes'
import { ThemeOption } from '~/types'
import { getAnonymousId } from '~/utils'

const props = defineProps<{
  theme?: ThemeOption
  likes: (Email | AnonymousId)[]
  postRef: DocumentReference
  fillColor: {
    SilpVat: string
    Vichagarn: string
    Gera: string
    Pat: string
    Other: string
    Main: string
  }
}>()

const themeStore = useThemeStore()

const userEmailOrAnonymousId = computed(() => {
  const user = auth.value!.currentUser
  return user ? (user.email ?? getAnonymousId()) : getAnonymousId()
})

const likeStatus = computed(() => {
  return props.likes.includes(userEmailOrAnonymousId.value)
})

const decidedTheme = props.theme ?? themeStore.savedTheme

const toggle = () => {
  if (likeStatus.value) {
    updateDoc(props.postRef, {
      likes: arrayRemove(userEmailOrAnonymousId.value),
      nLikes: increment(-1),
    })
  }
  else {
    updateDoc(props.postRef, {
      likes: arrayUnion(userEmailOrAnonymousId.value),
      nLikes: increment(1),
    })
  }
}
</script>
