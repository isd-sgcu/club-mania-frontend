<template>
  <div
    class="headbar"
  >
    <router-link to="/">
      <text-logo>
        Club Mania
      </text-logo>
    </router-link>
    <ol>
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
    <div class="flex items-center h-64px px-8">
      <mdi-account-circle-outline class="w-24px h-auto mr-8px" />
      <span class="admin-block">{{ adminName }}</span>
      <mdi-magnify class="w-24px h-auto ml-24px" @click="toggleSearch" />
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
      <carbon-close-filled class="w-32px h-auto ml-8px" @click="toggleSearch" />
    </div>
    <!---Search result add here!--->

    <!---End--->
  </div>
</template>

<script setup lang="ts">
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
  @apply fixed flex w-full h-64px justify-between items-center text-white
    backdrop-blur-30px overflow-hidden pl-8 top-0 z-10;
    background: rgba(0, 0, 0, 0.5)
}
.admin-block{
  @apply Navbar-font w-133px
    bg-transparent h-32px py-1 opacity-50 overflow-ellipsis;
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
  @apply inline text-center font-Roboto font-500 text-[20px] leading-[24px] cursor-pointer
    tracking-[0.1px] mr-48px;
}

li:last-child {
  margin-right: 0px;
}

</style>
