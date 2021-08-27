<!-- Somehow "Toggle.vue" produces errors -->
<template>
  <div
    class="relative transition-all inline-block cursor-pointer"
    :style="{
      height: height + 'px',
      width: width + 'px',
      borderRadius: radius + 'px',
      padding: outerPadding + 'px',
    }"
    :class="`bg-${active ? outerActiveColors[theme] : outerColors[theme]}`"
    ref="outer"
    @click="toggle"
  >
    <div
      class="absolute transition-all"
      :class="`bg-${innerBgColors[theme]}`"
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
import { ThemeOption } from "~/types";

const width = 60;
const height = 32;
const radius = height / 2;
const outerPadding = 4;
const innerCirclueRadius = height - 2 * outerPadding;

const props = defineProps<{ initState?: boolean, theme: ThemeOption }>();

// emit when this is clicked
const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>();

const active = ref(props.initState || false); // tells if the button is in active state
const inner = ref<null | HTMLDivElement>(null); // the circle element

// colors of the circluar thingy based on theme
const innerBgColors = {
  SilpVat: 'textbox-SilpVat',
  Vichagarn: 'Navy',
  Gera: '[#690000]',
  Pat: 'LightBrown',
  Other: 'white',
};
// colors of the outer region background when not active
const outerColors = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: 'yellow-800',
  Other: 'Steel-900',
};
// colors of the outer region background when active
const outerActiveColors = {
  SilpVat: 'purple-600',
  Vichagarn: '[#0D3D78]',
  Gera: '[#9F140E]',
  Pat: 'Brown',
  Other: 'Steel-800',
};

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
