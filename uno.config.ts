import { defineConfig, presetAttributify, presetTypography, presetWind3 } from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:5',
    'bg-code': 'bg-gray/5',
    'dropdown': 'relative',
    'dropdown-content': 'my-1 min-w-[120px] rounded bg-white p-0 py-2 text-black shadow dark:bg-black dark:text-white',
    'dropdown-item': 'flex items-center px-4 py-2 hover:bg-faded hover:bg-active',
    'panel': 'relative rounded-md bg-white p-3 shadow dark:bg-[#0e1726]',
    'flex-items-center': 'flex items-center justify-center',
  },
  presets: [
    presetAttributify(),
    presetTypography(),
    presetWind3(),
  ],
})
