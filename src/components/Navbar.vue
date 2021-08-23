<template>
  <div
    class="headbar container h-64px backdrop-blur-14px overflow-hidden flex px-8"
  >
    <text-logo>Club Mania</text-logo>
    <ol class="flex">
      <li>
        <router-link :to="'#'">
          วิชาการ
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          ศิลป์วัฒน์
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          กีฬา
        </router-link>
      </li>
      <li>
        <router-link :to="'#'">
          พัฒน์
        </router-link>
      </li>
    </ol>
    <div id="#searchBar" class="flex items-center">
      <mdi-account-circle-outline class="w-24px h-auto" />
      <input type="text" placeholder="ชื่อชมรม" class="search-input bg-transparent max-w-133px h-32px ml-8px mr-24px" />
      <mdi-magnify class="w-24px h-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.headbar {
  color: white;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: space-between;
}

.search-input {
  @apply font-Roboto font-500 text-[20px] leading-[24px] tracking-[0.1px];
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
