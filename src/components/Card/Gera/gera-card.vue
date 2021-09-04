<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

interface IProps {
  imgUrl: string
  text: string
  href?: string
}

const router = useRouter()
const { href } = defineProps<IProps>()

const detect = ref(false)

const handleMouseEnter = () => {
  detect.value = true
}

const handleMouseOut = () => {
  detect.value = false
}

const handleClick = () => {
  router.push(href || '#')
}

</script>

<template>
  <div class="flex flex-col max-w-[200px] h-full box-border cursor-pointer" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <div :class="!detect ? 'dark' : 'light'">
      <img :src="imgUrl">
      <div class="inner-frame">
        <text-sub2>{{ text }}</text-sub2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.light {
    @apply h-full p-2 pb-0;
    filter: drop-shadow(0px 0px 5px #FF3333);
    -webkit-filter: drop-shadow(0px 0px 5px #FF3333);
    background: linear-gradient(180deg, #DF322A 0%, #C0261F 100%);
}
.dark {
    @apply h-full p-2 pb-0;
    background: linear-gradient(148.99deg, #770000 0%, #C80000 34.94%, #770000 69.5%);
}

.inner-frame {
    @apply pt-5 pb-5 text-center text-white break-words leading-relaxed;
}

</style>
