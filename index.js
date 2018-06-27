#!/usr/bin/env node

const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const reactTemplate = require('./template-react')

const name = argv.name
const option = argv.option

fs.unlink(`${name}.js`, () => {
  console.log('deleted and')
  generate()
})

const generate = () => {
  const nameCalebCase = calebCase(name)

  fs.appendFile(`${name}.js`, reactTemplate(nameCalebCase, option), () => {
    console.log('created')
  })
}

const calebCase = (string) => (
  string.replace(/(\b[a-zA-Z])/g, (g) => (
    g.toUpperCase()
  )).replace(/(\b[-])/g, '')
)
