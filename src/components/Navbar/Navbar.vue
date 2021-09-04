<template>
  <div class="wrapper" style="background: rgba(0, 0, 0, 0.5)">
    <nav class="headbar">
      <div class="clubmania-icon">
        <router-link to="/">
          <img :src="PageIcon[theme.savedTheme]" class="py-2 w-18 md:w-22 lg:w-28 h-auto" />
        </router-link>
      </div>
      <ci-hamburger class="open-menu" @click="toggleSearch" />
      <ol class="main-menu">
        <router-link to="/wichakarn">
          <li>
            วิชาการ
          </li>
        </router-link>
        <router-link to="/silpvat">
          <li>
            ศิลป์วัฒน์
          </li>
        </router-link>
        <router-link to="/geela">
          <li>
            กีฬา
          </li>
        </router-link>
        <router-link to="/pat">
          <li>
            พัฒน์
          </li>
        </router-link>
      </ol>
      <!---Just for visual don't do anything special-->
      <div class="admin-block">
        <mdi-account-circle-outline class="w-4 md:w-6 h-auto mr-8px" />
        <p>{{ adminName }}</p>
        <mdi-magnify class="w-4 md:w-6 h-auto ml-3 lg:ml-6 cursor-pointer hover:text-yellow-700" @click="toggleSearch" />
      </div>
    </nav>
  </div>
  <!------blur backdrop----->
  <div
    v-if="isSearch"
    class="fixed w-full h-full backdrop-filter backdrop-blur-[15px] bg-[rgba(0,0,0,0.5)] z-10 md:hidden"
    @click="toggleSearch"
  />
  <!--This show when an user click the magnify icon or the dummy block-->
  <Sidebar
    :admin-name="adminName"
    :show="isSearch"
    @collapse="toggleSearch"
  >
    <Searchbox
      v-for="(item, index) in data"
      :key="index"
      :name="item.name"
      :description="item.description"
      :image="item.image"
    />
  </Sidebar>
</template>

<script setup lang="ts">
import Searchbox from './Searchbox.vue'
import { PageIcon } from '~/imagePath'
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()

const adminName = ref('ชมรมภาพยนตร์')
const isSearch = ref(false)

const toggleSearch = () => {
  isSearch.value = !isSearch.value
}
const data: any = [
  {
    name: 'ชมรมหมากกระดาน',
    description: 'ชมรมอื่นๆ',
    image: 'https://dummyimage.com/88x88/5c205c/ffffff.png',
  },
  {
    name: 'ชมรมถ่ายภาพ',
    description: 'ชมรมฝ่ายศิลป์วัฒน์',
    image: 'https://dummyimage.com/88x88/5c205c/ffffff.png',
  },
  {
    name: 'ชมรมภาพยนตร์',
    description: 'ชมรมฝ่ายศิลป์วัฒน์',
    image: 'https://dummyimage.com/88x88/5c205c/ffffff.png',
  },
  {
    name: 'ชมรมภาพศิลป์',
    description: 'ชมรมฝ่ายศิลป์วัฒน์',
    image: 'https://dummyimage.com/88x88/5c205c/ffffff.png',
  },
]
</script>

<style scoped>
.wrapper {
  @apply fixed top-0 z-10 px-5 md:px-9 w-full min-h-8 backdrop-filter backdrop-blur-[15px];
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
  @apply text-center font-Mitr font-300 text-[18px] leading-[20px] tracking-[0.1px] px-4 py-5
    lg:(text-[20px] leading-[24px] px-6) cursor-pointer;
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
  @apply font-Navbar w-133px h-32px bg-transparent pt-2px md:pt-6px opacity-75
    cursor-default overflow-ellipsis;
}

</style>
