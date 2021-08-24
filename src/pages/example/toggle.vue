<template>
  <div class="w-full px-4 h-screen bg-dark-900 grid items-center">
    <div class="space-y-3">
      <ToggleThing @toggle="(activeState) => isToggleActive = activeState" />
      <text-logo class="text-white block">Toggle is now {{ isToggleActive ? 'active' : 'disabled' }}</text-logo>
    </div>
  </div>
</template>

<script setup lang="ts">
const isToggleActive = ref<null | boolean>(null);
</script>

<style>
</style>
