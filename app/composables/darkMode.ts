import { useColorMode } from '@vueuse/core'

export const isColorMode = useColorMode({
  emitAuto: true,
  initialValue: 'auto',
})

export function toggleDark() {
  isColorMode.value = 'dark'
}
export function toggleLight() {
  isColorMode.value = 'light'
}
export function toggleSystem() {
  isColorMode.value = 'auto'
}
