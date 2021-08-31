<script setup lang="ts">
import { useRouter } from 'vue-router'

interface IProps {
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
  <div class="max-w-[200px] cursor-pointer" @click="handleClick" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
    <img :class="'outer-frame-' + (!detect ? 'blue' : 'pink')" class="rounded-2xl w-full" src="https://dummyimage.com/200x200/5c205c/ffffff.png">
    <div :class="'text-frame-' + (!detect ? 'blue' : 'pink')" class="bg-[#1F0A41] text-white pt-4 pb-4 pl-6 pr-6 rounded-2xl text-center mt-2">
      <text-sub2 class="leading-6">
        {{ text }}
      </text-sub2>
    </div>
  </div>
</template>

<style scoped>
.outer-frame-pink {
  border: 2px solid #FB39CF;
  filter: drop-shadow(0px 0px 4px #FF82E3);
}

.outer-frame-blue {
  border: 2px solid #7EECF9;
  filter: drop-shadow(0px 0px 4px #7EECF9);
}

.text-frame-pink {
  border: 2px solid #FFCDF4;
  filter: drop-shadow(0px 0px 4px #FF82E3);
}

.text-frame-blue {
  border: 2px solid #C2F9FF;
  filter: drop-shadow(0px 0px 4px #7EECF9);
}
</style>
