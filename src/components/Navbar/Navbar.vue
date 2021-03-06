<template>
  <div class="wrapper" style="background: rgba(0, 0, 0, 0.5)">
    <nav class="headbar">
      <div class="clubmania-icon">
        <router-link to="/">
          <img :src="PageIcon[theme.savedTheme]" class="py-2 w-18 md:w-22 lg:w-28 h-auto" />
        </router-link>
      </div>
      <img v-show="userPhotoUrl" class="w-7 h-7 mr-4 rounded-full ml-auto md:(hidden)" :src="userPhotoUrl">
      <ci-hamburger class="open-menu" @click="openSearch" />
      <ol class="main-menu">
        <router-link to="/wichakarn">
          <li :class="{'highlight-text': theme.savedTheme === 'Vichagarn'}">
            วิชาการ
          </li>
        </router-link>
        <router-link to="/silpvat">
          <li :class="{'highlight-text': theme.savedTheme === 'SilpVat'}">
            ศิลป์วัฒน์
          </li>
        </router-link>
        <router-link to="/geela">
          <li :class="{'highlight-text': theme.savedTheme === 'Gera'}">
            กีฬา
          </li>
        </router-link>
        <router-link to="/pat">
          <li :class="{'highlight-text': theme.savedTheme === 'Pat'}">
            พัฒน์
          </li>
        </router-link>
        <router-link to="/other">
          <li :class="{'highlight-text': theme.savedTheme === 'Other'}">
            อื่นๆ
          </li>
        </router-link>
      </ol>
      <!---Just for visual don't do anything special-->
      <div class="admin-block">
        <router-link to="/login">
          <div v-if="user.displayName" class="flex">
            <ri-logout-circle-r-line class="w-4 md:w-6 h-auto mr-4 hover:text-yellow-700" />
            <img v-show="userPhotoUrl" class="w-5 md:w-7 h-auto mr-4 rounded-full" :src="userPhotoUrl">
          </div>
          <mdi-account-circle-outline v-else class="w-4 md:w-6 h-auto mr-4 hover:text-yellow-700" />
        </router-link>
        <span class="font-Mitr lg:(text-lg)">{{ displayName }}</span>
        <mdi-magnify class="w-4 md:w-6 h-auto ml-3 lg:ml-6 cursor-pointer hover:text-yellow-700" @click="openSearch" />
      </div>
    </nav>
  </div>
  <!------blur backdrop----->
  <div
    v-if="isSearch"
    class="fixed w-screen h-screen backdrop-filter backdrop-blur-[15px] bg-[rgba(0,0,0,0.5)] z-10 md:hidden"
    @click="closeSearch"
  />
  <!--This show when an user click the magnify icon or the dummy block-->
  <Sidebar
    :admin-name="displayName"
    :show="isSearch"
    @collapse="closeSearch"
  />
</template>

<script setup lang="ts">
import { onAuthStateChanged, Unsubscribe } from 'firebase/auth'
import { auth } from '~/firebase'
import { PageIcon } from '~/imagePath'
import { useSearchTerm } from '~/stores/searchTerm'
import { useThemeStore } from '~/stores/themes'
import { useUserStore } from '~/stores/user'
import { getFromLocal } from '~/utils'

const theme = useThemeStore()
const user = useUserStore()
const searchTerm = useSearchTerm()

const isSearch = ref(false)
const displayName = computed(() => {
  if (user.displayName)
    return user.displayName
  return getFromLocal('anonymousNameForReal') ?? 'บุคคลนิรนาม'
})
const userPhotoUrl = ref('')
const authUnsub = ref<Unsubscribe | null>(null)

const openSearch = () => {
  isSearch.value = true
}

const closeSearch = () => {
  searchTerm.clearSavedTerm()
  isSearch.value = false
}

onMounted(() => {
  authUnsub.value = onAuthStateChanged(auth.value!, (user) => {
    if (user)
      userPhotoUrl.value = user.photoURL ?? ''
    else
      userPhotoUrl.value = ''
  })
})

onUnmounted(() => {
  authUnsub.value!()
})
</script>

<style>
.wrapper {
  @apply fixed top-0 z-10 px-5 md:px-9 w-full min-h-10 backdrop-filter backdrop-blur-[15px];
}

.headbar {
  @apply flex justify-between items-center lg:(grid grid-cols-[1fr,2fr,1fr]) text-white;

}

.clubmania-icon {
  @apply justify-self-start;
}

.main-menu {
  @apply relative flex flex-row justify-self-center <md:hidden;
}
.main-menu li {
  @apply text-center font-Mitr font-300 text-[18px] leading-[20px] tracking-[0.1px] px-3 py-5
    lg:(text-[20px] leading-[24px] px-5) cursor-pointer;
}
.main-menu li:hover {
  background: rgba(10, 10, 10, 0.7);
}
.open-menu, .close-menu {
  @apply w-32px h-auto cursor-pointer  md:hidden;
}
.admin-block {
  @apply relative flex items-center h-64px justify-self-end <md:hidden;
}
.admin-block p{
  @apply font-Navbar min-w-30 h-32px bg-transparent pt-2px md:pt-6px opacity-75
    cursor-default whitespace-nowrap overflow-hidden overflow-ellipsis;
}

.highlight-text {
  @apply text-yellow-700;
}
</style>
