import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
  entry: [ 'src/js/**/*.js', 'src/tag/**/*.tag', 'src/main.js' ],
  dest: 'dist/bundle.js',
  format: 'iife',
  plugins: [
    riot(),
    nodeResolve( { jsnext: true } ),
    multiEntry( { exports: false } ),
    commonjs(),
    buble()
  ]
}
