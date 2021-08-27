<template>
  <div class="w-full h-screen bg-darkPurple">
    <Filter :active-state="isActive" @toggle="(activeState) => isActive = activeState
    ">ยอดนิยม</Filter>
    <text-logo class="text-white block mt-5">Filter button is now {{ isActive ? "active" : "disabled" }}</text-logo>
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false);
</script>
