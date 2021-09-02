<template>
  <div class="sidebar" :style="transition">
    <!--Navigation menu in mobile screen-->
    <img :src="PageIcon['Main']" class="py-2 w-28 h-auto md:hidden" />
    <ol class="mobile-menu text-white md:hidden">
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
    <div class="search-form">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search..."
      />
      <carbon-close-filled class="w-32px h-auto ml-8px cursor-pointer hover:text-yellow-700 <md:hidden" @click="$emit('collaspe')" />
    </div>
    <!---Search result add here!--->
    <div class="result-container">
      <slot />
    </div>
    <div class="relative flex items-center h-64px md:hidden">
      <mdi-account-circle-outline class="w-4 md:w-6 h-auto mr-8px" />
      <p>{{ adminName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageIcon } from '~/imagePath'

const props = defineProps<{
  adminName?: string
  searchTerm: string
  show: boolean
}>()

const transition = computed(() => props.show ? { right: 0 } : { right: '-100%' })
</script>

<style scoped>
.sidebar {
  @apply fixed top-0 right-0 z-30 w-3/5 h-screen -right-full px-8 py-6
  bg-[#1f1f1f] md:(p-0 max-w-432px w-1/3 bg-transparent);
  transition: right 0.5s ease-out;
}
.search-form {
  @apply flex items-center bg-transparent md:(h-64px bg-grey-light+) px-4 text-purple-500;
}

.search-form input, .sidebar input{
  @apply w-9/10 h-40px rounded-[0.5rem] px-2 md:px-4 Navbar-font
  overflow-ellipsis focus:(border-solid border-[1.4px] border-purple-500 outline-none);
}
</style>
