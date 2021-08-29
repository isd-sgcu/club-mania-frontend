<script setup lang="ts">

interface IProps {
  dark?: boolean
  text: string
}

defineProps<IProps>()

const detect = ref(false)

const handleMouseEnter = () => {
  detect.value = true
}

const handleMouseOut = () => {
  detect.value = false
}

</script>

<template>
  <div class="max-w-[200px]" @mouseenter="handleMouseEnter" @mouseleave="handleMouseOut">
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
