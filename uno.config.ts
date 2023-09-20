import {defineConfig} from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
// import transformerAttributifyJsx from './plugins/index' // normal
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx' // error

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],  
  transformers: [
    transformerAttributifyJsx({
      // blocklist: ['h1'] // if h1 is in blockList, it will function well
    }),
  ],
})
