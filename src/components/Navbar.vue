<template>
  <div class="fixed top-0 z-10 px-9 w-full h-64px overflow-hidden backdrop-filter backdrop-blur-[15px]" style="background: rgba(0, 0, 0, 0.5)">
    <div
      class="headbar"
    >
      <div class="justify-self-start">
        <router-link to="/">
          <img :src="PageIcon[theme.savedTheme]" class="w-118px h-auto" />
        </router-link>
      </div>
      <ol class="h-full flex justify-self-center">
        <li>
          <router-link to="/category/vichagarn">
            วิชาการ
          </router-link>
        </li>
        <li>
          <router-link to="/category/silpvat">
            ศิลป์วัฒน์
          </router-link>
        </li>
        <li>
          <router-link to="/category/gera">
            กีฬา
          </router-link>
        </li>
        <li>
          <router-link to="/category/pat">
            พัฒน์
          </router-link>
        </li>
      </ol>
      <!---Just for visual don't do anything special-->
      <div class="flex items-center h-64px justify-self-end">
        <mdi-account-circle-outline class="w-24px h-auto mr-8px" />
        <span class="admin-block">{{ adminName }}</span>
        <mdi-magnify class="w-24px h-auto ml-24px cursor-pointer hover:text-yellow-700" @click="toggleSearch" />
      </div>
    </div>
    <!--This show when an user click the magnify icon or the dummy block-->
    <div v-if="isSearch" class="search-box">
      <div class="search-bar">
        <input
          v-model="searchTerm"
          class="search-input"
          type="text"
          placeholder="Search..."
        />
        <carbon-close-filled class="w-32px h-auto ml-8px cursor-pointer hover:text-yellow-700" @click="toggleSearch" />
      </div>
    <!---Search result add here!--->
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageIcon } from '~/imagePath'
import { useThemeStore } from '~/stores/themes'

const theme = useThemeStore()

const adminName = ref('ชมรมภาพยนตร์')
const searchTerm = ref('')
const isSearch = ref(false)

const searchClub = (searchTerm: string) => {

  // TODO: implement search logic
  /* - may be fetch data from files or firebase
     - create a element to render below searchbar
  */
}

const toggleSearch = () => {
  searchTerm.value = ''
  isSearch.value = !isSearch.value
}

// trigger when there are change in searchTerm
watchEffect(() => {
  // console.log(searchTerm.value)
  searchClub(searchTerm.value)
})
</script>

<style scoped>
.headbar {
  @apply grid grid-cols-[1fr,2fr,1fr] items-center text-white;

}

.admin-block{
  @apply Navbar-font w-133px h-32px bg-transparent py-1 opacity-75
    cursor-default overflow-ellipsis;
}

.search-box {
  @apply absolute max-w-432px w-1/3 box-border top-0 right-0 z-10;
}
.search-bar{
  @apply flex items-center bg-grey-light+ px-16px py-12px text-purple-500;
}

.search-input {
  @apply w-9/10 h-40px rounded-[8px] px-12px Navbar-font
  overflow-ellipsis focus:(border-solid border-[1.4px] border-purple-500 outline-none);
}

li {
  @apply text-center font-Mitr font-300 text-[16px] leading-[20px] px-6 py-5
    lg:(text-[20px] leading-[24px]) tracking-[0.1px] cursor-pointer;
}

li:hover {
  background: rgba(10, 10, 10, 0.7);
}

</style>
