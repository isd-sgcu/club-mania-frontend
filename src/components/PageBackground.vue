<template>
  <div class="background" :class="theme"></div>
</template>

<script setup lang="ts">
defineProps({
  theme: String,
})
</script>
<style>
.background {
  @apply fixed w-full h-full -z-50;
  background: linear-gradient(180deg, #1F1F1F 29.1%, #212121 100%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.background.vichakarn {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(180deg, #04489A 28.91%, #0B294E 92.96%);
  box-shadow: none;
}
.background.slipvat {
  background: linear-gradient(180deg, #1F0A41 29.1%, #4F1B6F 100%);
  box-shadow: none;
}

.background.gera {
  background: linear-gradient(180deg, #390000 60.73%, #800000 100%);
  box-shadow: none;
}

.background.pat {
  background: linear-gradient(180deg, #FFF2D7 58.85%, #FDD37E 99.99%, #FFCB64 100%);
  box-shadow: none;
}

.background.other {
  background: linear-gradient(180deg, #35638E 26.29%, #00203E 100%);
  box-shadow: none;
}
</style>
