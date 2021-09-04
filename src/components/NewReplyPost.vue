<template>
  <div class="relative">
    <transition-group appear name="fade" mode="out-in">
      <input
        v-if="asAnonymous"
        maxlength="25"
        class="<sm:(text-sm) bg-transparent border-1 rounded-full focus:outline-none px-[12px] py-[4px] mb-3"
        :class="`border-${border[themeStore.savedTheme]} placeholder-${placeholder[themeStore.savedTheme]} text-${text[themeStore.savedTheme]}`"
        placeholder="ใส่ชื่อของคุณ"
      />
      <TextFrame
        :show-discard-icon="true"
        :value="currentText"
        @textChange="(text) => currentText = text"
        @submit="submit"
        @discard="currentText = ''"
      />
    </transition-group>
    <div class="mt-1 md:(mt-2) flex items-center justify-between">
      <div class="space-x-[6px] md:(space-x-[12px]) flex items-center">
        <ToggleThing @toggle="onToggle" />
        <span class="<sm:(text-sm) font-Roboto">{{ toggleText }}</span>
      </div>
      <button
        class="<sm:(min-w-4rem text-sm px-3px) min-w-6rem md:(min-w-[10rem]) rounded focus:outline-none text-[16px] px-[16px] py-[4px] h-[32px]"
        :class="{'cursor-not-allowed': isEmpty }"
        :style="{
          color: buttonTextColors[themeStore.savedTheme],
          backgroundColor: backgroundColors[themeStore.savedTheme]
        }"
        @click="submit()"
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
  (e: 'submit', text: string): void
  (e: 'textChange', text: string): void
  (e: 'toggle', activeState: boolean): void
}>()

const currentText = ref('')
const asAnonymous = ref(props.isAnonymous)
const toggleText = ref(props.isAnonymous ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน')

const isEmpty = computed(() => {
  return currentText.value === ''
})

const onToggle = (activeState: boolean) => {
  emit('toggle', activeState)
  asAnonymous.value = activeState
  toggleText.value = activeState ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน'
}
const submit = () => {
  if (isEmpty.value) return
  emit('submit', currentText.value)
  currentText.value = ''
}

const buttonTextColors = {
  SilpVat: '#391E67',
  Vichagarn: '#391E67',
  Gera: '#5B3112',
  Pat: '#F4CF58',
  Other: '#2D3656',
  Main: '#2D3656',
}
const backgroundColors = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: '#5B3112',
  Other: 'white',
  Main: 'white',
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
