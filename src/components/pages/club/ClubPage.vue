<template>
  <div>
    <!-- banner is here -->
    <Banner :theme="themeStore.savedTheme" :is-club="true" :text="clubName" />
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
            <Gallery :club-name="clubName" :images="images" />
            <BackgroundSection>
              <h5 class="<sm:(text-1.3rem) mb-3" :class="`text-${clubNameClr}`">
                เกี่ยวกับชมรม
              </h5>
              <text-body1 class="<sm:(leading-1.6rem text-0.9rem) leading-1.8rem">
                %info%
              </text-body1>
            </BackgroundSection>
          </section>
          <!-- new reply -->
          <section class="space-y-4">
            <h5 class="<sm:(text-1.3rem) text-md" :class="`text-${clubNameClr}`">
              ความคิดเห็น
            </h5>
            <BackgroundSection>
              <NewReplyPost :is-anonymous="isAnonymous" />
            </BackgroundSection>
          </section>
          <!-- posts -->
          <section v-if="posts.length" class="space-y-4">
            <div class="<sm:(space-x-2) space-x-4">
              <Filter :active-state="isLastestFilterChosen" @toggle="latestFilterOnClick">
                ล่าสุด
              </Filter>
              <Filter :active-state="!isLastestFilterChosen" @toggle="popularFilterOnClick">
                ยอดนิยม
              </Filter>
            </div>
            <div v-for="(post, idx) in posts" :key="idx">
              <Post :post="post" />
            </div>
          </section>
        </div>
      </div>
    </PageBackground>
  </div>
</template>

<script setup lang="ts">
import { useFavicon } from '@vueuse/core'
import useClubConfig from './config'
import { useThemeStore } from '~/stores/themes'
// import { Post } from '~/types'

const { clubTypeColor, clubNameColor } = useClubConfig()
const themeStore = useThemeStore()

const isAnonymous = ref(false)
const isLastestFilterChosen = ref(false)

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

// dummy
const posts: Post[] = [
  {
    id: 'post1',
    publisher: 'Hihi',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?',
    likes: 3,
    badge: 'ชมรมศิลปะการพูดและการแสดง',
    postedAt: new Date().toDateString(),
    replies: [
      {
        id: 'lskdfjiweglglgkglgk3239f2jl',
        publisher: 'hi2',
        repliedAt: new Date().toDateString(),
        likes: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum sit, debitis voluptate nemo modi aliquid, aut ex unde labore, ullam dignissimos ipsa in nobis quas a deleniti sunt quod doloribus nihil magni numquam itaque amet? Voluptatibus sunt corporis dolorem! Id corrupti sint tempore autem fugiat a porro fuga dolore fugit ipsa facilis qui saepe, voluptatum facere blanditiis voluptas debitis reiciendis ducimus repellat possimus molestiae consequatur quo? Itaque molestias quia harum magnam blanditiis velit amet vel pariatur dolore explicabo minus, soluta aliquid modi sed cupiditate provident eos aliquam? Consequatur fuga sunt autem deserunt quibusdam rerum dolore officiis ipsa voluptate possimus.',
      },
      {
        id: 'fwefwefwefwefwe',
        publisher: 'hi2',
        repliedAt: new Date().toDateString(),
        likes: 10,
        badge: 'おはよう',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum sit, debitis volore explicabdam rerum dolore officiis ipsa voluptate possimus.',
      }, {
        id: 'dfgdfgdfgdfgdfg',
        publisher: 'hi2',
        repliedAt: new Date().toDateString(),
        likes: 10,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum sit, debitis voluptate nemo modi aliquid, aut ex unde labore, ullam dignissimos ipsa in nobis quas a deleniti sunt quod doloribus nihil magni numquam itaque amet? Voluptatibus sunt corporis dolorem! Id corrupti sint tempore autem fugiat a porro fuga dolore fugit ipsa facilis qui saepe, voluptatum facere blanditiis voluptas debitis reiciendis ducimus repellat possimus molestiae consequatur quo? Itaque molestias quia harum magnam blanditiis velit amet vel pariatur dolore explicabo minus, soluta aliquid modi sed cupiditate provident eos aliquam? Consequatur fuga sunt autem deserunt quibusdam rerum dolore officiis ipsa voluptate possimus.',
      },
    ],
  }, {
    id: 'post2',
    publisher: 'Hihi',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesm reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, modi. At dolore tenetur, laborum eligendi quae dolorum reiciendis ipsum fuga hic officiis nesciunt id ut aut sit accusamus atque iste?',
    likes: 3,
    badge: '黒猫',
    postedAt: new Date().toDateString(),
    replies: [
    ],
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
