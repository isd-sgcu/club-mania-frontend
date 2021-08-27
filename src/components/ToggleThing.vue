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
      :class="'bg-' + innerBgColors[theme]"
      :style="{
        height: innerCirclueRadius + 'px',
        width: innerCirclueRadius + 'px',
        borderRadius: (innerCirclueRadius / 2) + 'px',
        background: innerBackground
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ThemeOption } from '~/types'

const props = defineProps<{ initState?: boolean; theme: ThemeOption }>()

const width = 60
const height = 32
const radius = height / 2
const outerPadding = 4
const innerCirclueRadius = height - 2 * outerPadding
const active = ref(props.initState || false) // tells if the button is in active state
const inner = ref<null | HTMLDivElement>(null) // the circle element

// colors of the circluar thingy based on theme
const innerBgColors = {
  SilpVat: 'rgba(31, 10, 65, 0.75)',
  Vichagarn: '#0C233F',
  Gera: '#690000',
  Pat: '#98521E',
  Other: 'white',
}
// css style
const outerColors = {
  SilpVat: 'white',
  Vichagarn: 'white',
  Gera: 'white',
  Pat: '#F38C23',
  Other: '#2F4C7A',
}
// css style
const outerActiveColors = {
  SilpVat: '#5C3A87',
  Vichagarn: '#0D3D78',
  Gera: '#9F140E',
  Pat: '#5B3112',
  Other: '#516E8E',
}

const getOuterBackgroundColor = () => {
  return active.value ? outerActiveColors[props.theme] : outerColors[props.theme]
}

const outerBackground = ref(getOuterBackgroundColor())
const innerBackground = innerBgColors[props.theme]

// emit when this is clicked
const emit = defineEmits<{
  (e: 'toggle', activeState: boolean): void
}>()

const innerTranslateXDistance = (width - 2 * outerPadding) - innerCirclueRadius
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
watch(active, () => {
  setInnerXPosition()
})

// is called when clicked
const toggle = () => {
  active.value = !active.value
  emit('toggle', active.value)
  outerBackground.value = getOuterBackgroundColor()
}
</script>
