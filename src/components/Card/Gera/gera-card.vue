<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  imgUrl: string
  text: string
  dark: boolean
}

defineProps<IProps>()

</script>

<template>
  <div class="flex flex-col w-max box-border ">
    <div :class="dark ? 'dark' : 'light'">
      <img class="w-full" :src="imgUrl">
      <div class="inner-frame">
        <text-sub2>{{ text }}</text-sub2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.light {
    @apply w-max p-2 max-w-[200px] box-content pb-0;
    filter: drop-shadow(0px 0px 5px #FF3333);
    -webkit-filter: drop-shadow(0px 0px 5px #FF3333);
    background: linear-gradient(180deg, #DF322A 0%, #C0261F 100%);
}
.dark {
    @apply w-max p-2 max-w-[200px] box-content pb-0;
    background: linear-gradient(148.99deg, #770000 0%, #C80000 34.94%, #770000 69.5%);
}

.inner-frame {
    @apply pt-5 pb-5 text-center text-white break-words leading-relaxed;
}

</style>
