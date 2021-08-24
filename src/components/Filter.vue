<template>
  <button
    class="text-white bg-transparent text-[24px] focus:outline-none px-[34px] py-[6px] rounded-full border-white border-1 transition-all"
    :class="{ filterActive: isActive }"
    @click="toggle"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{ initState?: boolean }>();
const isActive = ref(props.initState || false);

const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>();

const toggle = () => {
  isActive.value = !isActive.value;
  emit('toggle', isActive.value);
}

</script>

<style>
.filterActive {
  @apply text-purple-900 bg-white;
}
</style>
