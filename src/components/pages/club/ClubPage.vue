<template>
  <div>
    <!-- banner is here -->
    <Banner :theme="themeStore.savedTheme" :is-club="true" text="%name%" />
    <PageBackground>
      <div class="w-10/11 xl:(max-w-6xl) mx-auto">
        <div class="space-y-4 md:(space-y-8)">
          <!-- club info -->
          <section class="space-y-3 md:(space-y-4)">
            <text-sub1>
              <span
                class="text-1.3rem sm:(text-2xl) lg:(text-3xl)"
                :class="`text-${clubTypeClr}`"
              >%category%</span>
              <br />
              <span
                class="text-1.3rem sm:(text-2xl) lg:(text-3xl)"
                :class="`text-${clubNameClr}`"
              >%name%</span>
            </text-sub1>
            <Gallery club-name="%name%" :images="images" />
            <BackgroundSection>
              <h5 class="<sm:(text-1.3rem) mb-3" :class="`text-${clubNameClr}`">
                เกี่ยวกับชมรม
              </h5>
              <text-body1 class="<sm:(leading-1.6rem text-0.9rem) leading-1.8rem">
                %info%
              </text-body1>
            </BackgroundSection>
          </section>
          <client-only>
            <!-- new new post -->
            <section class="space-y-4">
              <h5 class="<sm:(text-1.3rem) text-md" :class="`text-${clubNameClr}`">
                ความคิดเห็น
              </h5>
              <BackgroundSection>
                <NewReplyPost :is-anonymous="isAnonymous" @submit="post" />
              </BackgroundSection>
            </section>
            <!-- posts -->
            <section v-if="postRefs.length" class="space-y-4">
              <div class="<sm:(space-x-2) space-x-4">
                <Filter :active-state="isLastestFilterChosen" @toggle="latestFilterOnClick">
                  ล่าสุด
                </Filter>
                <Filter
                  :active-state="!isLastestFilterChosen"
                  @toggle="popularFilterOnClick"
                >
                  ยอดนิยม
                </Filter>
              </div>
              <div v-for="(post, idx) in postRefs" :key="idx">
                <Post :post="post" />
              </div>
            </section>
          </client-only>
        </div>
      </div>
    </PageBackground>
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import { doc, DocumentReference, Firestore, Unsubscribe, onSnapshot, Timestamp, updateDoc, arrayUnion, addDoc, collection } from 'firebase/firestore'
import useClubConfig from './config'
import { useThemeStore } from '~/stores/themes'
import { ClubDoc, PostDoc } from '~/firestore'
import { db } from '~/firebase'

const { clubTypeColor, clubNameColor } = useClubConfig()
const themeStore = useThemeStore()

const isAnonymous = ref(false)
const isLastestFilterChosen = ref(false)
const postRefs = ref<DocumentReference[]>([])
const memberRefs = ref<DocumentReference[]>([])
const unsubClub = ref<Unsubscribe | null>(null)
const clubRef = ref<DocumentReference | null>(null)

const clubTypeClr = clubTypeColor[themeStore.savedTheme]
const clubNameClr = clubNameColor[themeStore.savedTheme]

// dynamic favicon
if (themeStore.savedTheme === 'Pat')
  useFavicon('/favicon-light.svg')
else useFavicon('/favicon-dark.svg')

const latestFilterOnClick = (activeState: boolean) => {
  isLastestFilterChosen.value = activeState
}
const popularFilterOnClick = (activeState: boolean) => {
  isLastestFilterChosen.value = !activeState
}

const post = async(text: string) => {
  const by = 'test' // or the real thing

  const postDoc: PostDoc = {
    by,
    likes: [],
    postedAt: Timestamp.fromDate(new Date()),
    replies: [],
    text,
  }

  const postRef = await addDoc(collection(clubRef.value as DocumentReference, 'posts'), postDoc)

  updateDoc(clubRef.value as DocumentReference, {
    posts: arrayUnion(postRef),
  })
}

onMounted(async() => {
  clubRef.value = doc(db.value as Firestore, 'clubs', '%name%')
  // * IMPORTANT the club must exist in the firestore
  unsubClub.value = onSnapshot(clubRef.value, (snap) => {
    const clubDoc = snap.data() as ClubDoc
    postRefs.value = clubDoc.posts
  })
})

onUnmounted(() => (unsubClub.value as Unsubscribe)())

// dummy
const images = [
  { url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' },
  { url: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg' },
  { url: 'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg' },
]
</script>

<style>
</style>

<route lang="yaml">
meta:
  layout: club
</route>
