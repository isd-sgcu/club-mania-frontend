<template>
  <div class="relative transition-all">
    <!-- close icon -->
    <div v-show="showDiscardIcon && value" @click="discard">
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
      ref="textarea"
      v-model="value"
      class="border-1 rounded-[8px] w-full bg-transparent pl-[16px] pr-[28px] py-[8px] font-Roboto transition-all overflow-y-hidden"
      :class="`border-${border[themeName]} placeholder-${placeholder[themeName]} text-${text[themeName]}`"
      :placeholder="props.placeholder ?? 'แสดงความคิดเห็น...'"
      :disabled="props.disabled"
      :style="{ height }"
      resize="none"
      @input="onInput"
      @keydown.enter.exact.prevent="submit"
    ></textarea>
    <div v-show="props.disabled && showReadMore">
      <text-body2
        v-if="!expanded"
        class="text-white font-medium cursor-pointer"
        @click="expand"
      >
        แสดงเพิ่มเติม
      </text-body2>
      <text-body2 v-else class="text-white font-medium cursor-pointer" @click="shrink">
        แสดงน้อยลง
      </text-body2>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTextFrameConfig from './config'
import { ThemeOption } from '~/types'
import { useThemeStore } from '~/stores/themes'
const { defaultHeight, border, placeholder, text } = useTextFrameConfig()
const themeStore = useThemeStore()

const props = defineProps<{
  placeholder?: string
  disabled?: boolean // ex. comment
  showDiscardIcon?: boolean
  value?: string // initial value of the textarea, ex. comment
  theme?: ThemeOption
}>()

const emit = defineEmits<{
  (e: 'textChange', value: string): void
  (e: 'submit', value: string): void
}>()

const height = ref(`${defaultHeight}px`)
const expanded = ref(false)
const showReadMore = ref(false)
const value = ref(props.value ?? '') // current text in the area
const textarea = ref<null | HTMLTextAreaElement>(null)

const themeName = props.theme ?? themeStore.savedTheme

// if is a post or comment, let the height hugs the content
onMounted(() => {
  if (!props.disabled) return
  textarea.value!.style.height = 'auto'
  showReadMore.value = textarea.value!.scrollHeight > defaultHeight
})

const discard = () => {
  value.value = ''
}

// fires when enter is down
const submit = () => {
  emit('submit', value.value)
  discard()
}

const getHeights = () => {
  return {
    scrollHeight: (textarea.value as HTMLTextAreaElement).scrollHeight,
    clientHeight: (textarea.value as HTMLTextAreaElement).clientHeight,
    offsetHeight: (textarea.value as HTMLTextAreaElement).offsetHeight,
  }
}

// resizing must be done at oninput, at watching value doesn't work.
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
const onInput = () => {
  emit('textChange', value.value)

  // In case of selecting all then delete
  if (textarea.value!.value === '') {
    height.value = `${defaultHeight}px`
    return
  }

  const { scrollHeight } = getHeights()
  if (scrollHeight > defaultHeight) {
    textarea.value!.style.height = 'auto'
    textarea.value!.style.height = `${textarea.value!.scrollHeight}px`
  }
}

const expand = () => {
  const { scrollHeight } = getHeights()
  if (defaultHeight > scrollHeight) return
  height.value = `${scrollHeight}px`
  expanded.value = true
}
const shrink = () => {
  height.value = `${defaultHeight}px`
  expanded.value = false
}
</script>
