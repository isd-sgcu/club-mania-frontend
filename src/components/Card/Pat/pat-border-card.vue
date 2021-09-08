<script setup lang="ts">
import Palette from './paletteList.json'
import { PaletteKey } from './types'

const props = defineProps<{ color: PaletteKey | 'hover' }>()

const newPalette = ref(Palette[props.color])

watch(props, () => {
  newPalette.value = Palette[props.color]
})

</script>

<template>
  <div
    class="outer-border"
    :style="{ backgroundColor: newPalette.backgroundColor, borderTopColor: newPalette.borderTop, borderBottomColor: newPalette.borderBottom, borderLeftColor: newPalette.borderLeft, borderRightColor: newPalette.borderRight }"
  >
    <slot></slot>
    <div class="triangle-corner-base triangle-corner-top-left" :style="{ borderRightColor: newPalette.triangleTopLeft, borderBottomColor: newPalette.triangleTopLeft}" />
    <div class="triangle-corner-base triangle-corner-top-right" :style="{ borderLeftColor: newPalette.triangleTopRight, borderBottomColor: newPalette.triangleTopRight}" />
    <div class="triangle-corner-base triangle-corner-bottom-left" :style="{ borderRightColor: newPalette.triangleBottomLeft, borderTopColor: newPalette.triangleBottomLeft}" />
    <div class="triangle-corner-base triangle-corner-bottom-right" :style="{ borderLeftColor: newPalette.triangleBottomRight, borderTopColor: newPalette.triangleBottomRight}" />
  </div>
</template>

<style scoped>
.outer-border {
    @apply max-w-[200px] h-[200px] relative bg-[#D03131];
    border: 8px red solid;

    clip-path: polygon(
        0% 8px,
        8px 0%,
        calc(100% - 8px) 0%,
        100% 8px,
        100% calc(100% - 8px),
        calc(100% - 8px) 100%,
        8px 100%,
        0% calc(100% - 8px)
    );
}

.triangle-corner-base {
    @apply absolute w-0 h-0;
}

.triangle-corner-top-left {
    top: -16px;
    left: -16px;
    border-width: 8px;
}

.triangle-corner-top-right {
    top: -16px;
    right: -16px;
    border-width: 8px;
}

.triangle-corner-bottom-left {
    bottom: -16px;
    left: -16px;
    border-width: 8px;
}

.triangle-corner-bottom-right {
    bottom: -16px;
    right: -16px;
    border-width: 8px;
}
</style>
