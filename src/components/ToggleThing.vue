<!-- Somehow "Toggle.vue" produces errors -->
<template>
  <div
    class="bg-white relative transition-all"
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
      :class="{ innterActive: active }"
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

const active = ref(false);

const outer = ref<null | HTMLDivElement>(null);
const inner = ref<null | HTMLDivElement>(null);


onMounted(() => {
  setInnerXPosition();
});
watch(active, () => {
  setInnerXPosition();
})

const toggle = () => {
  active.value = !active.value;
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
.innerActive {
  /* transform: translateX(); */
}
</style>
