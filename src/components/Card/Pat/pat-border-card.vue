<script setup lang="ts">
import Palette from './paletteList.json'
import { PaletteKey } from './types'

const props = defineProps<{ color: PaletteKey }>()

const { color } = props

const { backgroundColor, borderTop, borderBottom, borderLeft, borderRight, triangleTopLeft, triangleTopRight, triangleBottomLeft, triangleBottomRight } = Palette[color]
</script>

<template>
  <div
    class="outer-border"
    :style="{ backgroundColor, borderTopColor: borderTop, borderBottomColor: borderBottom, borderLeftColor: borderLeft, borderRightColor: borderRight }"
  >
    <slot></slot>
    <div class="triangle-corner-base triangle-corner-top-left" :style="{ borderRightColor: triangleTopLeft, borderBottomColor: triangleTopLeft}" />
    <div class="triangle-corner-base triangle-corner-top-right" :style="{ borderLeftColor: triangleTopRight, borderBottomColor: triangleTopRight}" />
    <div class="triangle-corner-base triangle-corner-bottom-left" :style="{ borderRightColor: triangleBottomLeft, borderTopColor: triangleBottomLeft}" />
    <div class="triangle-corner-base triangle-corner-bottom-right" :style="{ borderLeftColor: triangleBottomRight, borderTopColor: triangleBottomRight}" />
  </div>
</template>

<style scoped>
.outer-border {
    @apply max-w-[200px] relative bg-[#D03131];
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
