<template>
  <div>
    <GalleryLightBox :img-url="staticInfo.images" :index="index" :is-open="isOpen" :handle-close="handleClose" />

    <!-- banner is here -->
    <Banner :theme="themeStore.savedTheme" :is-club="true" :text="staticInfo.name" />
    <PageBackground class="<sm:(pt-5 pb-10) pt-10 pb-20">
      <div class="w-10/11 xl:(max-w-6xl) mx-auto">
        <div class="space-y-4 md:(space-y-8)">
          <!-- club info -->
          <section class="space-y-3 md:(space-y-4)">
            <text-sub1>
              <span
                class="text-1.5rem sm:(text-3xl) lg:(text-4xl)"
                :class="`text-${clubTypeClr}`"
              >{{ staticInfo.category }}</span>
              <br />
              <span
                class="text-1.5rem sm:(text-3xl) lg:(text-4xl)"
                :class="`text-${clubNameClr}`"
              >{{ staticInfo.name }}</span>
            </text-sub1>
            <Gallery
              v-if="staticInfo.images"
              :club-name="staticInfo.name"
              :images="staticInfo.images"
              :handle-open-gallery="handleOpenGallery"
            />
            <div v-for="topic in topics" :key="topic">
              <BackgroundSection>
                <h5 class="<sm:(text-1.3rem) mb-3" :class="`text-${clubNameClr}`">
                  {{ topic }}
                </h5>
                <text-body1 class="<sm:(leading-1.6rem text-0.9rem) leading-1.8rem whitespace-pre-wrap">
                  {{ decideInfoText(topic) }}
                </text-body1>
              </BackgroundSection>
            </div>
          </section>
          <client-only>
            <!-- new new post -->
            <section class="space-y-4">
              <h5 class="<sm:(text-1.3rem) text-md" :class="`text-${clubNameClr}`">
                ความคิดเห็น/ถามคำถาม
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
              <div v-for="(each) in filteredPostDocsWithRefs" :key="each.ref.id">
                <Post :club-name="props.clubName" :post="each.ref" @delete="deletePost" />
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
import { doc, DocumentReference, Firestore, Unsubscribe, onSnapshot, updateDoc, arrayUnion, addDoc, collection, setDoc, arrayRemove, deleteDoc, getDoc } from 'firebase/firestore'
import { getNewPostDoc } from '../../../utils'
import useClubConfig from './config'
import { useThemeStore } from '~/stores/themes'
import { ClubDoc, PostDoc } from '~/firestore'
import { db } from '~/firebase'
import { AnonymousName, ClubStaticInfo, InfoTopicOption } from '~/types'
import { useUserStore } from '~/stores/user'

const { clubTypeColor, clubNameColor } = useClubConfig()
const themeStore = useThemeStore()

const props = defineProps<{
  category: string
  clubName: string
}>()

const isAnonymous = ref(false)
const isLastestFilterChosen = ref(false)
const postRefs = ref<DocumentReference[]>([])
const memberRefs = ref<DocumentReference[]>([])
const unsubClub = ref<Unsubscribe | null>(null)
const isOpen = ref(false)
const clubRef = ref<DocumentReference | null>(null)
const staticInfo = ref<ClubStaticInfo>({
  name: '',
  category: '',
  about: '',
  whatToExpect: '',
  recruitmentPeriod: '',
  contact: '',
  badge: '',
  images: [],
})

const index = ref<number>(1)

const postDocsWithRefs = ref<
{ ref: DocumentReference
  doc: PostDoc
}[]
>([])

const handleClose = (newValue: number) => {
  index.value = newValue
  isOpen.value = false
  document.body.style.overflow = 'auto'
}

const handleOpenGallery = (newValue: number) => {
  index.value = newValue
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

const filteredPostDocsWithRefs = computed(() => {
  if (isLastestFilterChosen.value)
    return postDocsWithRefs.value.sort((a, b) => b.doc.createdAt.toMillis() - a.doc.createdAt.toMillis())
  else
    return postDocsWithRefs.value.sort((a, b) => b.doc.nLikes - a.doc.nLikes)
})
const aboutText = computed(() => {
  return staticInfo.value.about
})
const expectText = computed(() => {
  return staticInfo.value.whatToExpect
})
const periodText = computed(() => {
  return staticInfo.value.recruitmentPeriod
})
const contactText = computed(() => {
  return staticInfo.value.contact
})

const topics: InfoTopicOption[] = ['เกี่ยวกับชมรม', 'สิ่งที่น้อง ๆ จะได้รับ', 'ช่วงเวลาที่รับสมัคร', 'ช่องทางการติดต่อ']
const clubTypeClr = clubTypeColor[themeStore.savedTheme]
const clubNameClr = clubNameColor[themeStore.savedTheme]

// dynamic favicon
if (themeStore.savedTheme === 'Pat')
  useFavicon('/favicon-light.svg')
else useFavicon('/favicon-dark.svg')

const decideInfoText = (topic: InfoTopicOption) => {
  if (topic === 'เกี่ยวกับชมรม')
    return aboutText.value
  if (topic === 'สิ่งที่น้อง ๆ จะได้รับ')
    return expectText.value
  return topic === 'ช่วงเวลาที่รับสมัคร'
    ? periodText.value
    : contactText.value
}

const latestFilterOnClick = (activeState: boolean) => {
  isLastestFilterChosen.value = activeState
}
const popularFilterOnClick = (activeState: boolean) => {
  isLastestFilterChosen.value = !activeState
}

const post = async(text: string, customName: string | AnonymousName = 'บุคคลนิรนาม', asAnonymous: boolean) => {
  const postDoc: PostDoc = getNewPostDoc(text, customName, asAnonymous)
  const postRef = await addDoc(collection(clubRef.value as DocumentReference, 'posts'), postDoc)
  updateDoc(clubRef.value as DocumentReference, {
    posts: arrayUnion(postRef),
  })
}

const deletePost = async(postRef: DocumentReference) => {
  updateDoc(clubRef.value!, {
    posts: arrayRemove(postRef),
  })
  deleteDoc(postRef)
}

const createClubDoc = async(clubRef: DocumentReference) => {
  const defaultClubDoc: ClubDoc = {
    members: [],
    posts: [],
  }
  await setDoc(clubRef, defaultClubDoc)
}

onBeforeMount(async() => {
  const { info }: { info: ClubStaticInfo }
    = await import(`../../../assets/clubs/${props.category}/${props.clubName}.js`)
  staticInfo.value = info

  clubRef.value = doc(db.value as Firestore, 'clubs', props.clubName)
  unsubClub.value = onSnapshot(clubRef.value, async(snap) => {
    const clubDoc = snap.data() as ClubDoc | undefined // if not exist
    if (clubDoc === undefined) {
      await createClubDoc(clubRef.value as DocumentReference)
    }
    else {
      postRefs.value = clubDoc.posts
      memberRefs.value = clubDoc.members
      const temp = []
      for (const e of clubDoc.posts) {
        temp.push({
          ref: e,
          doc: (await getDoc(e)).data() as PostDoc,
        })
      }
      postDocsWithRefs.value = temp
    }
  })

  const userStore = useUserStore()
  let setBadgeText = ''
  if (userStore.isMember(props.clubName))
    setBadgeText = info.badge
  else if (userStore.asStaff)
    setBadgeText = 'Staff'
  userStore.setBadge(setBadgeText)
})

onMounted(() => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
})

onUnmounted(() => (unsubClub.value as Unsubscribe)())
</script>
