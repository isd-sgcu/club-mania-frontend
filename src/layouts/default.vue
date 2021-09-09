<template>
  <div class="flex flex-col min-h-100vh overflow-x-hidden">
    <Navbar />
    <PageBackground class="flex-1">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="route.path"></component>
        </transition>
      </router-view>
    </PageBackground>
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.2s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.2s ease-in;
}
</style>
