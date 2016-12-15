import riot from 'rollup-plugin-riot'
import commonjs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
  entry: [ 'src/js/**/*.js', 'src/tag/**/*.tag', 'src/main.js' ],
  dest: 'dist/bundle.js',
  format: 'umd',
  moduleName: 'tryRiotWithObseriot',
  plugins: [
    nodeResolve( { jsnext: true } ),
    multiEntry( { exports: false } ),
    riot(),
    commonjs(),
    buble()
  ]
}
