<script setup lang="ts">
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  imgUrl: String,
})

const { imgUrl } = toRefs(props)

</script>

<template>
  <div class="outer-frame mb-3">
    <div class="inner-frame">
      <img :src="imgUrl">
    </div>
  </div>
</template>

<style scoped>
.outer-frame {
    @apply rounded-none border-solid border-width-8;
    border-color:#228AC5 #0B2E58 #0C233F #0C5AA3;
}
.inner-frame {
    @apply w-full h-full border-width-8 max-w-[200px];
    border-color: #0D3D78;
}
</style>
