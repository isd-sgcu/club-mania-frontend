<!-- Somehow "Toggle.vue" produces errors -->
<template>
  <div
    class="relative transition-all inline-block cursor-pointer"
    :style="{
      height: height + 'px',
      width: width + 'px',
      borderRadius: radius + 'px',
      padding: outerPadding + 'px',
      background: outerBackground
    }"
    @click="toggle"
  >
    <div
      ref="inner"
      class="absolute transition-all"
      :class="'bg-' + innerBgColors[themeName]"
      :style="{
        height: innerCircleRadius + 'px',
        width: innerCircleRadius + 'px',
        borderRadius: (innerCircleRadius / 2) + 'px',
        background: innerBackground
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import useToggleConfig from './config'
import { ThemeOption } from '~/types'
import { useThemeStore } from '~/stores/themes'
const { width, height, outerPadding, innerBgColors, outerColors, outerActiveColors, radius, innerCircleRadius, innerTranslateXDistance } = useToggleConfig()
const themeStore = useThemeStore()

const props = defineProps<{ initState?: boolean; theme?: ThemeOption }>()

const themeName = props.theme ?? themeStore.savedTheme
const active = ref(props.initState || false) // tells if the button is in active state
const inner = ref<null | HTMLDivElement>(null) // the circle element

const getOuterBackgroundColor = () => {
  return active.value ? outerActiveColors[themeName] : outerColors[themeName]
}
const outerBackground = ref(getOuterBackgroundColor())
const innerBackground = innerBgColors[themeName]

// emit when this is clicked
const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>()

const traslateInnerX = (inner: HTMLDivElement, distance: number | string) => {
  inner.style.transform = `translateX(${distance}px)`
}

const setInnerXPosition = () => {
  if (active.value)
    traslateInnerX(inner.value as HTMLDivElement, 0)
  else
    traslateInnerX(inner.value as HTMLDivElement, innerTranslateXDistance)
}

onMounted(() => {
  setInnerXPosition()
})

// is called when clicked
const toggle = () => {
  active.value = !active.value
  setInnerXPosition()
  emit('toggle', active.value)
  outerBackground.value = getOuterBackgroundColor()
}
</script>
