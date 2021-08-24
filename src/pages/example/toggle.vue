<!-- 
params: init-state sets the initial active state of the toggle
events: @toggle returns the active state of the toggle when clicked 
-->
<template>
  <div class="w-full px-4 h-screen bg-dark-900 grid items-center">
    <div class="space-y-3">
      <ToggleThing :init-state="isToggleActive" @toggle="(activeState) => isToggleActive = activeState" />
      <text-logo class="text-white block">Toggle is now {{ isToggleActive ? 'active' : 'disabled' }}</text-logo>
    </div>
  </div>
</template>

<script setup lang="ts">
const isToggleActive = ref(true); // initial state is active
</script>

<style>
</style>
