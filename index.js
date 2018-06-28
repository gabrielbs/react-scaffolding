#!/usr/bin/env node

const fs = require('fs')
const chalk = require('chalk')
const argv = require('minimist')(process.argv.slice(2))
const reactTemplate = require('./template-react')

const log = console.log
const name = argv.name
const option = argv.option
const path = argv.path
const file = path ? `${path}/${name}.js` : `${name}.js`

const generate = () => {
  const nameCalebCase = calebCase(name)
  fs.appendFile(file, reactTemplate(nameCalebCase, option), (error) => {
    if (error) {
      log(chalk.red(error))
    } else {
      log(chalk.green('Scaffold generated'))
    }
  })
}

const calebCase = (string) => (
  string.replace(/(\b[a-zA-Z])/g, (g) => (
    g.toUpperCase()
  )).replace(/(\b[-])/g, '')
)

if (!fs.existsSync(file)) {
  generate()
} else {
  log(chalk.red('That file already exists, please choose another name.'))
}
