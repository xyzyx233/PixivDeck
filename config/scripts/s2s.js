// @flow
import { transformFileSync } from 'babel-core'
import funcPlugin from 'babel-plugin-create-redux-action-func'
import typePlugin from 'babel-plugin-create-redux-action-type'
import actionComposePlugin from 'babel-plugin-redux-action-compose'

const fs = require('fs')
const { basename, resolve, dirname } = require('path')
const chokidar = require('chokidar')
const prettier = require('prettier')

const watcher = chokidar.watch('app/**/*.js', {
  cwd: process.cwd(),
  ignoreInitial: true,
})

const transfromWrite = (input, output, plugin) => {
  try {
    const { code } = transformFileSync(input, {
      babelrc: false,
      plugins: [plugin],
    })

    const fomattedCode = prettier.format(code, {
      semi: false,
      singleQuote: true,
      trailingComma: 'es5',
    })

    fs.writeFileSync(output, fomattedCode, 'utf-8')
  } catch (err) {
    console.log(err)
  }
}

watcher.on('change', (input /* : string */) => {
  console.log(input)

  if (basename(input).includes('actionTypes')) {
    const outputPath = output => resolve(dirname(input), output)

    transfromWrite(input, outputPath('actions.js'), [
      funcPlugin,
      { actionTypes: 'actionTypes.js' },
    ])

    transfromWrite(input, outputPath('constants.js'), [
      typePlugin,
      { filename: 'actionTypes.js' },
    ])

    const x = resolve(process.cwd(), 'app/action.js')
    transfromWrite(x, x, [actionComposePlugin, { inputPath: input }])
  }
})
