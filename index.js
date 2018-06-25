const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const reactTemplate = require('./template-react')

fs.unlink('test.js', () => {
  console.log('deleted and')
  generate()
})

const generate = () => {
  const name = argv.name
  const nameCalebCase = name.replace(/(\b[a-zA-Z])/g, (g) => (
    g.toUpperCase()
  )).replace(/(\b[-])/g, '')

  fs.appendFile(`${name}.js`, reactTemplate(nameCalebCase), () => {
    console.log('created')
  })
}
