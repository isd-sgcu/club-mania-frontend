<template>
  <div class="relative">
    <transition-group appear name="fade" mode="out-in">
      <input
        v-if="!asAnonymous"
        v-model="customName"
        :maxlength="maxLength"
        class="<sm:(text-sm) bg-transparent border-1 rounded-full focus:outline-none px-[12px] py-[4px] mb-3"
        :class="`border-${border[themeStore.savedTheme]} placeholder-${placeholder[themeStore.savedTheme]} text-${text[themeStore.savedTheme]}`"
        placeholder="ใส่ชื่อของคุณ (12)"
        :disabled="!nameEditable || nameNotEditableForUser"
        @click="reconsiderEditable"
      />
      <TextFrame
        :show-discard-icon="true"
        :value="currentText"
        @textChange="onTextChange"
        @submit="submit"
        @discard="currentText = ''"
      />
    </transition-group>
    <div class="mt-1 md:(mt-2) flex items-center justify-between">
      <div class="space-x-[6px] md:(space-x-[12px]) flex items-center">
        <ToggleThing :init-state="!asAnonymous" @toggle="onToggle" />
        <span class="<sm:(text-sm) font-Roboto">{{ toggleText }}</span>
      </div>
      <button
        class="<sm:(min-w-4rem text-sm px-3px) min-w-6rem md:(min-w-[10rem]) rounded focus:outline-none text-[16px] px-[16px] py-[4px] h-[32px]"
        :class="{ 'cursor-not-allowed': isEmpty }"
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
import { auth } from '~/firebase'
import { useUserStore } from '~/stores/user'
import { getFromLocal } from '~/utils'
const { border, placeholder, text } = useTextFrameConfig()

const props = defineProps<{
  buttonText?: string
}>()

const emit = defineEmits<{
  (e: 'submit', text: string, customName?: string, asAnonymous: boolean): void
  (e: 'textChange', text: string): void
  (e: 'toggle', activeState: boolean): void
}>()

const themeStore = useThemeStore()
const userStore: { displayName: string | null; setDisplayName: (name: string) => void } = useUserStore() // displayName does not need to be reactive

const maxLength = 12

/**
 * Decide initial custom name
 */
const initCustomName = () => {
  if (userStore.displayName) return userStore.displayName.slice(0, maxLength - 1)

  const user = auth.value!.currentUser
  if (!user) {
    const savedCustomName = getFromLocal('anonymousCustomName')
    return savedCustomName ?? ''
  }

  const defaultUserDisplayName = user.displayName
  if (!defaultUserDisplayName)
    return ''

  // userStore.setDisplayName(defaultUserDisplayName)
  return defaultUserDisplayName.slice(0, maxLength - 1)
}

const currentText = ref('')
const customName = ref(initCustomName())
const asAnonymous = ref(customName.value === '')
/**
 * computed nameEditable alone is not enough
 * See detail at 'reconsiderEditable' function below
 */
const nameNotEditableForUser = ref(false)

const isEmpty = computed(() => {
  return currentText.value === ''
})
const toggleText = computed(() => !asAnonymous.value ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน')

const nameEditable = computed(() => {
  if (!auth.value) return false // maybe logged in but auth is some how null
  return auth.value.currentUser === null
})

/**
 * on refresh auth.value.currentUser is null for a second
 * and computed failed to see for its change from null to User
 * in case there's really is a user logged in
 */
const reconsiderEditable = () => {
  nameNotEditableForUser.value = auth.value?.currentUser !== null
}

const onTextChange = (text: string) => {
  currentText.value = text
  emit('textChange', text)
}

const onToggle = (activeState: boolean) => {
  emit('toggle', activeState)
  asAnonymous.value = !asAnonymous.value
  // toggleText.value = activeState ? 'แสดงตัวตน' : 'ไม่แสดงตัวตน'
}
const submit = () => {
  if (isEmpty.value) return
  emit('submit', currentText.value, customName.value === '' ? undefined : customName.value, asAnonymous.value)
  currentText.value = ''

  // if (auth.value!.currentUser) return
  // setToLocal('anonymousCustomName', customName.value)
  // userStore.setDisplayName(customName.value)
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
