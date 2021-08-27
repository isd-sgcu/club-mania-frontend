<template>
  <div
    class="headbar"
  >
    <text-logo>
      Club Mania
    </text-logo>
    <ol>
      <li>
        <router-link :to="'#'">
          {{ t('clubtype.title1.short') }}
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          {{ t('clubtype.title2.short') }}
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          {{ t('clubtype.title3.short') }}
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          {{ t('clubtype.title4.short') }}
        </router-link>
      </li>
    </ol>
    <!---Just for visual don't do anything special-->
    <div class="flex items-center h-64px px-8">
      <mdi-account-circle-outline class="w-24px h-auto mr-8px" />
      <span class="dummy-block" @click="toggleSearch">{{ (name.length) ? name : t('searchBar.placeholder') }}</span>
      <mdi-magnify class="w-24px h-auto ml-24px" @click="toggleSearch" />
    </div>
  </div>
  <!--This show when an user click the magnify icon or the dummy block-->
  <div v-if="isSearch" class="search-box">
    <div class="search-bar">
      <input
        v-model="name"
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const name = ref('')
const isSearch = ref(false)

const searchClub = (searchTerm: string) => {

  // TODO: implement search logic
  /* - may be fetch data from files or firebase
     - create a element to render below searchbar
  */
}

const toggleSearch = () => {
  isSearch.value = !isSearch.value
}

// trigger when there are change in name
watchEffect(() => {
  // console.log(name.value)
  searchClub(name.value)
})
</script>

<style scoped>
.headbar {
  @apply w-full flex items-center justify-between text-white h-64px
    backdrop-blur-14px overflow-hidden pl-8 z-50;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.dummy-block{
  @apply font-Roboto font-500 text-[20px] leading-[24px] tracking-[0.1px]
    bg-transparent w-133px h-32px py-1 opacity-50 overflow-ellipsis;
}

.searchbox {
  @apply absolute text-purple-500 top-0 right-0;
}
.searchbar{
  @apply flex items-center bg-grey-light px-16px py-12px;
}

.search-input {
  @apply max-w-364px w-364px h-40px rounded-[8px] border-solid border-[1px]
    px-12px overflow-ellipsis;
  box-sizing: border-box;
}

li {
  @apply inline float-left text-center font-Roboto font-500 text-[20px] leading-[24px]
    tracking-[0.1px] mr-48px;
}

li:last-child {
  margin-right: 0px;
}

</style>
