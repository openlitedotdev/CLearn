import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-gray-800',
    'bg-active': 'bg-gray:10',
    'bg-faded': 'bg-gray:5',
    'bg-code': 'bg-gray/5',
    'columns-title': 'mb-4 text-2xl font-bold font-fira-code underline underline-primary underline-offset-8',
    'btn': 'rounded flex-items-center gap-2 px-3 py-2 disabled:pointer-events-none disabled:op30!',
    'dropdown': 'relative',
    'dropdown-content': 'my-1 min-w-[120px] rounded bg-white p-0 py-2 text-black shadow dark:bg-black dark:text-white',
    'dropdown-item': 'flex-items-center px-4 py-2 hover:bg-faded hover:bg-active',
    'flex-items-center': 'flex items-center',
    'flex-justify-center': 'flex-items-center justify-center',
    'flex-justify-between': 'flex-items-center justify-between',
    'panel': 'relative rounded-md bg-white p-3 shadow dark:bg-[#0e1726]',
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2e3b98',
      },
      background: {
        DEFAULT: '#09090b',
      },
    },
    fontFamily: {
      'fira-code': 'Fira Code',
      'poly-sans': 'Poly Sans',
    },
  },
  presets: [
    presetAttributify(),
    presetTypography(),
    presetWind3({}),
  ],

  transformers: [transformerDirectives()],
})
