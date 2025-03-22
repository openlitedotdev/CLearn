import { useColorMode } from '@vueuse/core'

export const isColorMode = useColorMode({
  emitAuto: true,
  initialValue: 'auto',
})

type ColorMode = 'dark' | 'light' | 'auto'

export interface DarkModeOption {
  code: ColorMode
  icon: string
  name: string
}

export function toggleDark(value: ColorMode) {
  isColorMode.value = value
}
