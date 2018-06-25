const fs = require('fs')
const argv = require('minimist')(process.argv.slice(2))
const reactTemplate = require('./template-react')

fs.unlink('test.js', () => {
  console.log('deleted and')
  generate()
})

const generate = () => {
  console.log(argv.name)
  fs.appendFile('test.js', reactTemplate(), () => {
    console.log('created')
  })
}
