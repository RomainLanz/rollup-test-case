import pkg from './package.json'
import buble from 'rollup-plugin-buble'

export default [
  {
    input: 'index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
      { file: pkg.browser, format: 'umd', name: 'Fivb' }
    ],
    plugins: [
      buble({ exclude: ['node_modules/**'] })
    ]
  },
]
