<script setup lang="ts">

interface IProps {
  imgUrl: string
  hover?: boolean
}

defineProps<IProps>()

</script>

<template>
  <div :class="!hover ? 'outer-frame' : 'outer-frame-hover'" class="outer-frame mb-3 rounded-none border-solid border-width-8">
    <div class="inner-frame border-width-8 max-w-[200px]">
      <img class="bg-white" :src="imgUrl || 'https://dummyimage.com/200x200/5c205c/ffffff.png'">
    </div>
  </div>
</template>

<style scoped>
.outer-frame {
    border-color:#228AC5 #0B2E58 #0C233F #0C5AA3;
}

.outer-frame-hover {
  border-color: #71BBFF #0B2E58 #0C5AA3 #228AC5
}
.inner-frame {
    border-color: #0D3D78;
}
</style>
