<!-- Somehow "Toggle.vue" produces errors -->
<template>
  <div
    class="bg-white relative transition-all inline-block"
    :style="{
      height: height + 'px',
      width: width + 'px',
      borderRadius: radius + 'px',
      padding: outerPadding + 'px',
    }"
    :class="{ outerActive: active }"
    ref="outer"
    @click="toggle"
  >
    <div
      class="bg-purple-textBox absolute transition-all"
      :style="{
        height: innerCirclueRadius + 'px',
        width: innerCirclueRadius + 'px',
        borderRadius: (innerCirclueRadius / 2) + 'px'
      }"
      ref="inner"
    ></div>
  </div>
</template>

<script setup lang="ts">
const width = 60;
const height = 32;
const radius = height / 2;
const outerPadding = 4;
const innerCirclueRadius = height - 2 * outerPadding;

// emit when this is clicked
const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>();


const active = ref(false); // tells if the button is in active state
const inner = ref<null | HTMLDivElement>(null); // the circle element

onMounted(() => {
  setInnerXPosition();
});
watch(active, () => {
  setInnerXPosition();
})

// is called when clicked
const toggle = () => {
  active.value = !active.value;
  emit('toggle', active.value);
}

const innerTranslateXDistance = (width - 2 * outerPadding) - innerCirclueRadius;
const traslateInnerX = (inner: HTMLDivElement, distance: number | string) => {
  inner.style.transform = `translateX(${distance}px)`;
}
const setInnerXPosition = () => {
  if (active.value)
    traslateInnerX(inner.value as HTMLDivElement, 0);
  else
    traslateInnerX(inner.value as HTMLDivElement, innerTranslateXDistance);
}
</script>

<style scoped>
.outerActive {
  @apply bg-purple-600;
}
</style>
