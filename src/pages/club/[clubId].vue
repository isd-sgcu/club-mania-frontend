<template>
  <!-- banner is here -->
  <PageBackground></PageBackground>
  <div class="px-[204px] bg-gradient-to-b">
    <div class="space-y-[24px]">
      <!-- club info -->
      <section class="space-y-[16px]">
        <text-sub1>
          <span :class="`text-${clubTypeColor[themeStore.savedTheme]}`">{{ clubType + ' > ' }}</span>
          <span :class="`text-${clubNameColor[themeStore.savedTheme]}`">{{ clubName }}</span>
        </text-sub1>
        <Gallery :club-name="clubName" :images="images" />
        <BackgroundSection>
          <h5 :class="`text-${clubNameColor[themeStore.savedTheme]}`">
            เกี่ยวกับชมรม
          </h5>
          <text-body1>{{ info }}</text-body1>
        </BackgroundSection>
      </section>
      <!-- new reply -->
      <section class="space-y-[16px]">
        <h5 :class="`text-${clubNameColor[themeStore.savedTheme]}`">
          ความคิดเห็น
        </h5>
        <BackgroundSection>
          <NewReplyPost :is-anonymous="isAnonymous" />
        </BackgroundSection>
      </section>
      <!-- posts -->
      <section v-if="posts.length" class="space-y-[16px]">
        <div class="space-x-[16px]">
          <Filter
            :active-state="isLastestFilterChosen"
            @toggle="(activeState) => isLastestFilterChosen = activeState"
          >
            ล่าสุด
          </Filter>
          <Filter
            :active-state="!isLastestFilterChosen"
            @toggle="(activeState) => isLastestFilterChosen = !activeState"
          >
            ยอดนิยม
          </Filter>
        </div>
        <div v-for="(post, idx) in posts" :key="idx">
          <Post :post="post" />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import useClubConfig from './config'
import { useThemeStore } from '~/stores/themes'
// import { Post } from '~/types'

const { clubTypeColor, clubNameColor } = useClubConfig()
const themeStore = useThemeStore()

defineProps<{ clubId: string }>()

const isAnonymous = ref(false)
const isLastestFilterChosen = ref(false)

// dummy
const posts: Post[] = [
  {
    publisher: 'Hihi',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?',
    likes: 3,
    badge: 'ชมรมศิลปะการพูดและการแสดง',
    postedAt: new Date().toDateString(),
    replies: [],
  },
]
const clubType = 'ชมรมฝ่ายกีฬา'
const clubName = 'ชมรมบริดจ์และหมากกระดาน'
const images = [
  { url: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg' },
  { url: 'https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg' },
  { url: 'https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg' },
]
const info = 'สองสามีภรรยาติดโควิด ขี่จยยไปรพ.แห่งหนึ่งให้ช่วยรักษา แต่รพ.บอกเตียงเต็ม จึงขับรถกลับบ้าน ระหว่างทางอ่อนเพลียมากจนไปต่อไม่ไหว จึงจอดรถที่สน.พระโขนง นอนรอความช่วยเหลือเบื้องต้นอาสาร่วมกตัญญู ตรวจเชื้อโควิดให้ พบว่า ฝ่ายหญิงขึ้น 2 ขีด มีไข้สูง อ่อนเพลีย และค่าออกซิเจนต่ำกว่าปกติ ฝ่ายชายมีอาการอ่อนเพลีย ตรวจเชื้อแล้วขึ้น 2 ขีดเช่นกัน ขณะนี้กำลังประสานขอความช่วยเหลือ Update: ล่าสุด ศูนย์เอราวัณ มารับตัวแล้วครับ ฝ่ายชายไป รพ.กล้วยน้ำไท ฝ่ายหญิงไปจุดพักคอยเขตบางนา'
</script>

<style>
</style>

<route lang="yaml">
meta:
  layout: club
</route>
