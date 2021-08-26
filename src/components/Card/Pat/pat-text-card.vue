<template>
  <PatBorderCard>
    <div class="text-container">
      <TextSub2>Hello World</TextSub2>
      <div class="rectangle-top-left" />
      <div class="rectangle-top-right" />
      <div class="rectangle-bottom-left" />
      <div class="rectangle-bottom-right" />
    </div>
  </PatBorderCard>
</template>

<style scoped>
.text-container {
    @apply w-full h-full pt-2 pb-2 pl-6 pr-6 text-white relative;
}

.rectangle-top-left {
    @apply absolute w-[4px] h-[4px] absolute bg-black top-[4px] left-[4px];
}

.rectangle-top-right {
    @apply absolute w-[4px] h-[4px] absolute bg-black top-[4px] right-[4px];
}

.rectangle-bottom-left {
    @apply absolute w-[4px] h-[4px] absolute bg-black bottom-[4px] left-[4px];
}

.rectangle-bottom-right {
    @apply absolute w-[4px] h-[4px] absolute bg-black bottom-[4px] right-[4px];

}
</style>
