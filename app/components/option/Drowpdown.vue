<script setup lang="ts">
import { onClickOutside, useVModel } from '@vueuse/core'

const props = withDefaults(defineProps<{
  modelValue?: boolean
  direction?: 'start' | 'end'
}>(), {
  direction: 'start',
})
const emit = defineEmits<{ (...args: any): void }>()

const enabled = useVModel(props, 'modelValue', emit, { passive: true })
const el = ref<HTMLDivElement>()

onClickOutside(el, () => {
  enabled.value = false
})
</script>

<template>
  <div ref="el" class="relative">
    <slot name="trigger" :enabled="enabled" :click="() => enabled = !enabled">
      <button @click="enabled = !enabled">
        Dropdown
      </button>
    </slot>

    <div
      class="absolute z-30 border border-gray/20 rounded bg-white shadow transition-all duration-200 dark:bg-[#151515]"
      :class="[enabled ? 'op-100 top-8.5' : 'op0 pointer-events-none -translate-y-1', direction === 'end' ? 'right-0' : 'left-0']"
    >
      <slot />
    </div>
  </div>
</template>
