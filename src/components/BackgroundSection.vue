<template>
  <section
    class="p-[16px] bg-textbox-Vichagarn rounded-[16px] w-full"
    :class="`bg-textbox-${props.theme} text-${textColors[props.theme]}`"
  >
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import { ThemeOption } from "~/types";

const props = defineProps<{
  theme: ThemeOption,
}>();

const textColors = {
  SilpVat: 'grey-light',
  Vichagarn: 'grey-light',
  Gera: 'grey-light',
  Pat: 'Brown',
  Other: 'white',
};
</script>

<style>
</style>
