import { defineConfig, presetAttributify, presetUno, presetIcons, transformerAttributifyJsx } from 'unocss'
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons()
  ],
  transformers: [
    transformerAttributifyJsx()
  ]
})
