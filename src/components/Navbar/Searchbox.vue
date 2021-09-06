<template>
  <router-link
    :to="embedLink"
    class="cursor-pointer hover:bg-grey-primary px-6 my-3 md:(flex max-h-120px bg-white p-4 my-0 hover:bg-grey-light)"
  >
    <img :src="image" class="w-18 h-auto mr-4 lg:(w-22 h-auto mr-8) <md:hidden" />
    <div class="md:(flex flex-col py-4)">
      <p class="font-Mitr text-white font-300 text-[10px] leading-[16px] md:hidden">
        {{ name }}
      </p>
      <text-sub1 class="text-purple-700 <md:hidden <lg:text-[18px]">
        {{ name }}
      </text-sub1>
      <text-body2 class="<md:hidden <lg:text-[10px]">
        {{ description }}
      </text-body2>
    </div>
  </router-link>
</template>

<script setup lang="ts">

defineProps<{
  name: string
  description: string
  image?: string
  embedLink: string
}>()

</script>
