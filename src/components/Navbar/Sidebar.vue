<template>
  <div class="sidebar" :style="transition">
    <!--Navigation menu in mobile screen-->
    <img v-if="searchTerm.savedTerm === ''" :src="PageIcon['Main']" class="clubmania-icon" />
    <ol v-if="searchTerm.savedTerm === ''" class="mobile-menu">
      <router-link to="/wichakarn" @click="$emit('collapse')">
        <li :class="{'highlight-text': theme.savedTheme === 'Vichagarn'}">
          วิชาการ
        </li>
      </router-link>
      <router-link to="/silpvat" @click="$emit('collapse')">
        <li :class="{'highlight-text': theme.savedTheme === 'SilpVat'}">
          ศิลป์วัฒน์
        </li>
      </router-link>
      <router-link to="/geela" @click="$emit('collapse')">
        <li :class="{'highlight-text': theme.savedTheme === 'Gera'}">
          กีฬา
        </li>
      </router-link>
      <router-link to="/pat" @click="$emit('collapse')">
        <li :class="{'highlight-text': theme.savedTheme === 'Pat'}">
          พัฒน์
        </li>
      </router-link>
      <router-link to="/other" @click="$emit('collapse')">
        <li :class="{'highlight-text': theme.savedTheme === 'Other'}">
          อื่นๆ
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
        @focusin="() => {notOnfocus = false}"
        @focusout="() => {notOnfocus = true}"
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
        :image="item.logo"
        @click="$emit('collapse')"
      />
    </div>
    <div
      v-if="notOnfocus && searchTerm.savedTerm === ''"
      class="mt-auto w-full flex items-center h-12
      border-[#3D3D3D] border-t-1 text-white pl-3 text-center md:hidden"
    >
      <router-link to="/login" @click="$emit('collapse')">
        <ri-logout-circle-r-line v-if="user.displayName" class="w-4 h-auto mr-8px md:w-6 hover:text-yellow-700" />
        <mdi-account-circle-outline v-else class="w-4 h-auto mr-8px md:w-6 hover:text-yellow-700" />
      </router-link>
      <p class="whitespace-nowrap overflow-hidden overflow-ellipsis">
        {{ adminName }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSearchTerm } from '~/stores/searchTerm'
import { useUserStore } from '~/stores/user'
import { useThemeStore } from '~/stores/themes'
// Image path
import { PageIcon } from '~/imagePath'

const props = defineProps<{
  adminName?: string
  show: boolean
}>()

defineEmits<{
  (e: 'collapse'): void
}>()

const searchTerm = useSearchTerm()
const user = useUserStore()
const theme = useThemeStore()

const notOnfocus = ref(true)

const foundClubs = computed(() => searchTerm.getClubs())
const transition = computed(() => props.show ? { right: 0 } : { right: '-100%' })

// check if is not server side rendering
if (typeof window !== 'undefined') {
  visualViewport.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--viewport-height', `${visualViewport.height}px`)
  })
}
</script>

<style scoped>
.sidebar {
  @apply fixed flex flex-col overflow-hidden top-0 z-30 min-w-50 -right-full bg-[#1f1f1f]
  md:(p-0 max-w-432px w-1/3 bg-transparent);
  transition: right 0.5s ease-out;
  height: var(--viewport-height);
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
</style>
