<script setup lang="ts">

interface IProps {
  hover?: boolean
}

defineProps<IProps>()

</script>

<template>
  <div :class="!hover ? 'outer-frame' : 'outer-frame-hover'" class="rounded-none border-solid border-width-8 p-2 max-w-[200px] box-content text-center bg-[#0D3D78] text-white">
    <text-sub2><slot /></text-sub2>
  </div>
</template>

<style scoped>
.outer-frame {
  border-color:#228AC5 #0B2E58 #0C233F #0C5AA3;
}

.outer-frame-hover {
  border-color: #71BBFF #0B2E58 #0C5AA3 #228AC5;
}
</style>
