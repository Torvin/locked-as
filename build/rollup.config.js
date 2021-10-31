import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import cleaner from 'rollup-plugin-cleaner'
import livereload from 'rollup-plugin-livereload'
import scss from 'rollup-plugin-scss'
import serve from 'rollup-plugin-serve'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import ts from 'typescript'

/** @returns {import('rollup').RollupOptions} */
export default commandLineArgs => {
  const isDebug = commandLineArgs['config-debug'] === true

  const tsconfigJSON = ts.readConfigFile('tsconfig.json', ts.sys.readFile).config;
  const tsCompilerOptions = ts.parseJsonConfigFileContent(
    tsconfigJSON,
    ts.sys,
    './'
  ).options;

  return {
    input: './src/index.ts',
    treeshake: true,
    output: {
      file: './docs/build/index.js',
      format: 'iife',
      esModule: Boolean(tsCompilerOptions.esModuleInterop),
      sourcemap: isDebug,
    },
    plugins: [
      !isDebug && cleaner({
        targets: ['./docs/build/'],
      }),
      resolve({
        mainFields: ['module', 'main', 'browser'],
      }),
      commonjs(),
      json(),
      typescript({
        typescript: ts,
      }),
      scss({
        output: './docs/build/index.css',
      }),
      isDebug && sourceMaps(),
      !isDebug && terser({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
          passes: 10,
        },
        ecma: 5,
        toplevel: true,
        warnings: true,
      }),
      isDebug && serve('docs'),
      isDebug && livereload({
        watch: 'docs',
      }),
    ],
  }
}
