<template>
  <div class="sidebar" :style="transition">
    <!--Navigation menu in mobile screen-->
    <img v-if="searchTerm.savedTerm === ''" :src="PageIcon['Main']" class="clubmania-icon" />
    <ol v-if="searchTerm.savedTerm === ''" class="mobile-menu">
      <router-link to="/wichakarn" @click="$emit('collapse')">
        <li>
          วิชาการ
        </li>
      </router-link>
      <router-link to="/silpvat" @click="$emit('collapse')">
        <li>
          ศิลป์วัฒน์
        </li>
      </router-link>
      <router-link to="/geela" @click="$emit('collapse')">
        <li>
          กีฬา
        </li>
      </router-link>
      <router-link to="/pat" @click="$emit('collapse')">
        <li>
          พัฒน์
        </li>
      </router-link>
    </ol>
    <text-body2 v-if="searchTerm.savedTerm === ''" class="text-white ml-6 md:hidden">
      ค้นหา
    </text-body2>
    <div class="search-form">
      <mdi-magnify class="absolute box-border ml-1 text-[16px] text-[#898989] md:hidden" />
      <input
        v-model="searchTerm.savedTerm"
        type="text"
        placeholder="ค้นหาชมรม"
      >
      <carbon-close-filled class="w-32px h-auto ml-8px cursor-pointer hover:text-yellow-700 <md:hidden" @click="$emit('collapse')" />
    </div>
    <!---Search result add here!--->
    <div v-if="searchTerm.savedTerm !== ''" class="result-container">
      <searchbox
        v-for="item in foundClubs"
        :key="item.name"
        :embed-link="item.url"
        :name="item.name"
        :description="item.category"
        @click="$emit('collapse')"
      />
    </div>
    <div
      v-if="searchTerm.savedTerm === ''"
      class="absolute w-full bottom-0 flex items-center h-12
      border-[#3D3D3D] border-t-1 text-white pl-6 py-3 md:hidden"
    >
      <mdi-account-circle-outline class="w-4 md:w-6 h-auto mr-8px" />
      <p>{{ adminName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchTerm } from '~/stores/searchTerm'
import { PageIcon } from '~/imagePath'

const props = defineProps<{
  adminName?: string
  show: boolean
}>()

defineEmits<{
  (e: 'collapse'): void
}>()

const searchTerm = useSearchTerm()
const foundClubs = computed(() => searchTerm.getClubs())

// const MAX_DISPLAY = 6

// const searchTerm = ref('')
// const foundClubs = ref<Array<Club>>([])
// const initial = ref(true)

// const searchClub = async(searchTerm: string) => {
//   // TODO: implement search logic
//   searchTerm = searchTerm.toLowerCase()
//   foundClubs.value = [] // [[score, club's index]]
//   if (searchTerm !== '') {
//     const bufferArr = []
//     for (let i = 0; i < clubList.length; i++) {
//       const clubname = clubList[i].name.toLowerCase()
//       const idx = clubname.indexOf(searchTerm)
//       if (idx !== -1)
//         bufferArr.push([idx, i])
//     }

//     const processArr = bufferArr.sort((a, b) => {
//       if (a[0] < b[0])
//         return -1
//       if (a[0] > b[0])
//         return 1
//       return a[1] - b[1]
//     })
//     for (let i = 0; i < MAX_DISPLAY && i < processArr.length; i++) {
//       const idx = processArr[i][1]
//       foundClubs.value.push(clubList[idx])
//     }
//   }
// }

// // trigger when there are change in searchTerm
// watch(searchTerm, (searchTerm) => {
//   if (initial.value) {
//     initial.value = false
//     return
//   }
//   const timer = setTimeout(() => {
//     searchClub(searchTerm)
//   }, 500)
//   return () => clearTimeout(timer)
// })

const transition = computed(() => props.show ? { right: 0 } : { right: '-100%' })
</script>

<style scoped>
.sidebar {
  @apply fixed top-0 right-0 z-30 min-w-50 h-screen -right-full bg-[#1f1f1f]
  md:(p-0 max-w-432px w-1/3 bg-transparent);
  transition: right 0.5s ease-out;
}

.clubmania-icon {
  @apply w-28 h-12 mt-6 mx-auto md:hidden;
}

.mobile-menu {
  @apply text-white mt-4 mb-2 py-2 border-[#3D3D3D] border-t-1 border-b-1 md:hidden;
}

.mobile-menu li {
  @apply font-Mitr font-300 text-[14px] leading-[20px] px-8 py-2 cursor-pointer hover:bg-yellow-300;
}

.search-form {
  @apply flex items-center bg-transparent border-[#3D3D3D] border-b-1 px-4 py-3
    md:(h-64px bg-grey-light+ text-purple-500 border-0 py-0);
}

.search-form input {
  @apply font-Navbar w-full rounded-xl pl-6 text-[10px] <md:bg-transparent border-solid border-[1px] border-[#C4C4C4]
    text-white overflow-ellipsis md:(h-40px rounded-[0.5rem] pl-2 md:pl-4 text-purple-500
    focus:(border-solid border-[1.4px] border-purple-500 outline-none));
}
.result-container {

}
</style>
