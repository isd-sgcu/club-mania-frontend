<template>
  <div class="outer-frame p-2 max-w-[200px] box-content text-center bg-[#0D3D78] text-white">
    <text-sub2><slot /></text-sub2>
  </div>
</template>

<style scoped>
.outer-frame {
    @apply rounded-none border-solid border-width-8;
    border-color: #228ac5 #0b2e58 #0c233f #0c5aa3;
}
</style>
