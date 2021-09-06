<template>
  <footer class="p-1 md:(py-2)" :class="`bg-footer-${themeStore.savedTheme}`">
    <div
      class="<md:(hidden) space-x-2 w-full px-7 py-2 flex items-center text-white"
    >
      <img class="h-5" src="/isd.svg" />
      <span>สงวนลิขสิทธิ์</span>
      <img class="h-4" src="/copyright.svg" />
      <span class="font-Roboto text-md">{{ t("footer.text") }}</span>
      <span class="flex-grow"></span>
      <span class="space-x-3">
        <a :href="igLink" target="_blank">
          <img class="h-5 inline" src="/ig.svg" />
        </a>
        <a :href="fbLink" target="_blank">
          <img class="h-5 inline" src="/fb.svg" />
        </a>
      </span>
    </div>
    <div
      class="<xs:(p-4) md:(hidden) p-6 flex flex-col items-start text-white font-Roboto"
    >
      <span class="<xs:(space-x-0) space-x-2 mb-5">
        <div class="<xs:(block) inline space-x-2">
          <img class="h-5 inline" src="/isd.svg" />
          <span class="<sm:(text-xs) <md:(text-sm)">สงวนลิขสิทธิ์</span>
        </div>
        <div class="xs:(inline) space-x-2">
          <img class="h-4 inline" src="/copyright.svg" />
          <span class="<sm:(text-xs) <md:(text-sm) font-Roboto text-md">
            องค์การบริหารสโมสรนิสิต
            <br class="xs:(hidden)" />จุฬาลงกรณ์มหาวิทยาลัย (อบจ.)
          </span>
        </div>
      </span>
      <div class="<xs:(space-y-2) space-y-3">
        <div class="flex items-center space-x-3">
          <a :href="igLink" target="_blank">
            <img class="h-5 inline" src="/ig.svg" />
          </a>
          <span class="<sm:(text-xs) <md:(text-sm)">CLUB MANIA</span>
        </div>
        <div class="flex items-center space-x-3">
          <a :href="fbLink" target="_blank">
            <img class="h-5 inline" src="/fb.svg" />
          </a>
          <span class="<sm:(text-xs) <md:(text-sm)">SGCU CHULA</span>
        </div>
      </div>
    </div>
    <div>
      <h2 class="block text-center text-xs tracking-wide uppercase text-white font-Roboto">
        Sponsored by
      </h2>
      <div class="space-x-2 text-center my-2">
        <a v-for="sp in sponsors" :key="sp.link" :href="sp.link" target="_blank"><img class="cover-center h-10 w-10 inline rounded border-1px border-white cursor-pointer" :src="sp.imageUrl"></a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useThemeStore } from '~/stores/themes'
const { t } = useI18n()
const themeStore = useThemeStore()

const igLink = '#'
const fbLink = '#'
const sponsors: {
  link: string
  imageUrl: string
}[] = [
  {
    link: '#',
    imageUrl: 'https://www.msd-animal-health-hub.co.uk/sites/default/files/diabetes-cat-3-min.png',
  },
  {
    link: '#',
    imageUrl: 'https://i.guim.co.uk/img/media/934738f102dae25a69bbfd22c55380b483347af3/0_71_2119_1272/master/2119.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7641f7ddd84e2361f6eb8d47c9958293',
  },
  {
    link: '#',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBi6q97nzVlCfH38XNNwxhBqGfWsj2G4-XJQ&usqp=CAU',
  },
  {
    link: '#',
    imageUrl: 'https://www.alleycat.org/wp-content/uploads/2021/02/344x361_FoundACat.jpg',
  },
]
</script>
