<template>
  <div
    class="headbar container h-64px backdrop-blur-14px overflow-hidden flex px-8"
  >
    <text-logo>Club Mania</text-logo>
    <ol class="flex">
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
    <div :class="focusOnSearch ? 'searchbar active' : 'searchbar'">
      <mdi-account-circle-outline v-if="!focusOnSearch" class="w-24px h-auto mr-8px" />
      <input
        v-model="name"
        :class="focusOnSearch ? 'search-input active' : 'search-input'"
        type="text"
        :placeholder="t('searchBar.placeholder')"
        outline="none"
        @focus="toggleSearch"
        @blur="toggleSearch"
      />
      <mdi-magnify v-if="!focusOnSearch" class="w-24px h-auto ml-24px" @click="toggleSearch" />
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const name = ref('')
const focusOnSearch = ref(false)

const searchClub = (searchTerm: string) => {

  // TODO: implement search logic
  // - may be fetch data from files

}

const toggleSearch = () => {
  focusOnSearch.value = !focusOnSearch.value
}

// trigger when there are change in name
watchEffect(() => {
  console.log(name.value)
  searchClub(name.value)
})
</script>

<style scoped>

.searchbar {
  @apply flex items-center h-full;
}

.searchbar.active{
 @apply bg-grey-light px-16px py-12px;
  transform: translateX(2rem);
}
.search-input {
  @apply font-Roboto font-500 text-[20px] leading-[24px] tracking-[0.1px]
    bg-transparent max-w-133px h-32px;
}

.search-input.active {
  @apply max-w-364px w-364px rounded-xl border-gray-200;
}

.headbar {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;
}

li {
  @apply font-Roboto font-500 text-[20px] leading-[24px] tracking-[0.1px];
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0px 16px;
  margin-right: 48px;
}

li:last-child {
  margin-right: 0px;
}

</style>
