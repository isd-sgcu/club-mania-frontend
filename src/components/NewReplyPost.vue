<template>
  <div class="space-y-[16px] relative">
    <transition-group appear name="fade" mode="out-in">
      <input
        v-if="asAnonymous"
        maxlength="25"
        class="bg-transparent border-1 border-[#FFCECB] rounded-full focus:outline-none px-[12px] py-[4px] placeholder-[#FFCECB]"
        placeholder="ใส่ชื่อของคุณ"
      />
      <TextFrame
        :theme="'Gera'"
        :show-discard-icon="true"
        @textChange="$emit('textChange')"
        @submit="$emit('submit')"
      />
    </transition-group>
    <div class="flex items-center justify-between">
      <div class="space-x-[12px] flex items-center">
        <ToggleThing :theme="'Gera'" @toggle="onToggle" />
        <span class="font-Roboto">{{ toggleText }}</span>
      </div>
      <button
        class="text-[16px] h-[32px] w-[160px] text-Brown px-[16px] py-[4px] bg-white rounded focus:outline-none"
        @click="$emit('submit')"
      >โพสต์</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isAnonymous: boolean
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
