<template>
  <div class="relative transition-all">
    <!-- close icon -->
    <div v-show="showDiscardIcon && value" @click="value = ''">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="absolute top-[8px] right-[8px] cursor-pointer"
      >
        <path
          d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7z"
          fill="white"
        />
      </svg>
    </div>
    <textarea
      v-model="value"
      ref="textarea"
      class="border-1 rounded-[8px] border-blue-b100 w-full bg-transparent placeholder-blue-b100 pl-[16px] pr-[28px] py-[8px] text-grey-light font-Roboto transition-all"
      :placeholder="props.placeholder ?? 'Placeholder...'"
      :disabled="props.disabled"
      :style="{ minHeight }"
      resize="none"
    ></textarea>
    <div v-show="props.disabled">
      <text-body2
        v-if="!expanded"
        @click="expand"
        class="text-white font-medium cursor-pointer"
      >Read more</text-body2>
      <text-body2 v-else @click="shrink" class="text-white font-medium cursor-pointer">Show less</text-body2>
    </div>
  </div>
</template>

<script setup lang="ts">
const minHeight = 80 + 'px';
const expanded = ref(false);

const props = defineProps<{
  placeholder?: string,
  disabled?: boolean,
  showDiscardIcon?: boolean,
  value?: string,
}>();
const emit = defineEmits<{
  (e: 'textChange', value: string): void,
}>();

const isYOverflown = () => {
  const { scrollHeight, clientHeight } = getHeights();
  return scrollHeight > clientHeight;
}


const value = ref(props.value ?? ''); // current text in the area
watch(value, () => {
  emit('textChange', value.value);
  if (isYOverflown()) expand();
  else shrink();
})

const textarea = ref<null | HTMLTextAreaElement>(null);

const getHeights = () => {
  return {
    scrollHeight: (textarea.value as HTMLTextAreaElement).scrollHeight,
    clientHeight: (textarea.value as HTMLTextAreaElement).clientHeight,
    offsetHeight: (textarea.value as HTMLTextAreaElement).offsetHeight
  }
}

const expand = () => {
  const { scrollHeight } = getHeights();
  (textarea.value as HTMLTextAreaElement).style.height = scrollHeight + 5 + 'px';
  expanded.value = true;
}
const shrink = () => {
  (textarea.value as HTMLTextAreaElement).style.height = minHeight;
  expanded.value = false;
}
</script>
