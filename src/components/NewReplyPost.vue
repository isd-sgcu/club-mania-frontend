<template>
  <div class="relative">
    <transition-group appear name="fade" mode="out-in">
      <input
        v-if="asAnonymous"
        maxlength="25"
        class="bg-transparent border-1 rounded-full focus:outline-none px-[12px] py-[4px] mb-3"
        :class="`border-${border[themeStore.savedTheme]} placeholder-${placeholder[themeStore.savedTheme]} text-${text[themeStore.savedTheme]}`"
        placeholder="ใส่ชื่อของคุณ"
      />
      <TextFrame
        :show-discard-icon="true"
        @textChange="$emit('textChange')"
        @submit="$emit('submit')"
      />
    </transition-group>
    <div class="mt-2 flex items-center justify-between">
      <div class="space-x-[12px] flex items-center">
        <ToggleThing @toggle="onToggle" />
        <span class="font-Roboto">{{ toggleText }}</span>
      </div>
      <button
        class="text-[16px] px-[16px] py-[4px] h-[32px] min-w-[160px] text-Brown  bg-white rounded focus:outline-none"
        @click="$emit('submit')"
      >
        {{ props.buttonText ?? 'โพสต์' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useTextFrameConfig from './Frame/TextFrame/config'
import { useThemeStore } from '~/stores/themes'
const { border, placeholder, text } = useTextFrameConfig()
const themeStore = useThemeStore()

const props = defineProps<{
  isAnonymous: boolean
  buttonText?: string
}>()

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'textChange'): void
  (e: 'toggle', activeState: boolean): void
}>()

const asAnonymous = ref(props.isAnonymous)
const toggleText = ref(props.isAnonymous ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน')

const onToggle = (activeState: boolean) => {
  emit('toggle', activeState)
  asAnonymous.value = activeState
  toggleText.value = activeState ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน'
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  position: absolute;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-move {
  transition: all 0.3s ease;
}
</style>
