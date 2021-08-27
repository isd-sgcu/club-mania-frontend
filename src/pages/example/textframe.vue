<template>
  <div class="bg-purple-900 w-full absolute h-screen px-[300px]">
    <!-- disable = false, auto resizes in height -->
    <TextFrame
      placeholder="Hi hi! This is a placeholder. 😎"
      :show-discard-icon="true"
      @textChange="show"
      @submit="onSubmit"
    />
    <text-logo class="text-white">
      {{ text }}
    </text-logo>
    <!-- Read more button shows only if disable = true -->
    <TextFrame :value="lorem100" :disabled="true" />
  </div>
</template>

<script setup lang="ts">
const text = ref('')

const show = (value: string) => {
  text.value = value
}

const onSubmit = (value: string) => {
  text.value = ''
  // eslint-disable-next-line no-alert
  alert(value)
}

const lorem100 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt molestias incidunt illum doloribus temporibus iusto fugiat libero delectus vel! Eligendi qui cupiditate quo, soluta dolorum deserunt, autem eius perferendis tempore magnam debitis distinctio facere dignissimos ducimus officiis omnis, mollitia quibusdam laboriosam libero deleniti sed. Cum iusto culpa temporibus quisquam optio accusamus doloribus, minima perspiciatis voluptates dolore iure rerum distinctio libero expedita sed deserunt illo ipsum nemo. Amet dolorum dicta fugiat enim eos repudiandae sint. Fugit illum maxime rem similique maiores nihil consequatur libero iste vero? Vero rerum eos natus enim. Provident placeat reprehenderit harum maiores rerum unde voluptate, molestiae minus.'
</script>
