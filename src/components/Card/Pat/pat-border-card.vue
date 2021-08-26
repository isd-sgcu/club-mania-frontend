<script setup lang="ts">
</script>

<template>
  <div class="outer-border">
    <slot></slot>
    <div class="triangle-corner-base triangle-corner-top-left" />
    <div class="triangle-corner-base triangle-corner-top-right" />
    <div class="triangle-corner-base triangle-corner-bottom-left" />
    <div class="triangle-corner-base triangle-corner-bottom-right" />
  </div>
</template>

<style scoped>
.outer-border {
    @apply max-w-[200px] relative bg-[#D03131];
    border: 8px red solid;
    border-top-color: #F64848;
    border-right-color: #C31717;
    border-bottom-color: #C11313;
    border-left-color: #DD4848;

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
    border-right-color: #EC4848;
    border-bottom-color: #EC4848;
    border-width: 8px;
}

.triangle-corner-top-right {
    top: -16px;
    right: -16px;
    border-left-color:#D71E1E;
    border-bottom-color:#D71E1E;
    border-width: 8px;
}

.triangle-corner-bottom-left {
    bottom: -16px;
    left: -16px;
    border-right-color: #C82E2E;
    border-top-color: #C82E2E;
    border-width: 8px;
}

.triangle-corner-bottom-right {
    bottom: -16px;
    right: -16px;
    border-left-color: #BD1818;
    border-top-color: #BD1818;
    border-width: 8px;
}

</style>
