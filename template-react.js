module.exports = (className, option = 'class') => {
  const templateClass =
`import React, { Component } from 'react'

export default class ${className} {
  render() {
    return(
      <div></div>
    )
  }
}`

  const templateFunction =
`import React from 'react'

const ${className} = (props) => (
  <div></div>
)

export default ${className}
`

  switch (option) {
  case 'class':
    return templateClass
  case 'function':
    return templateFunction
  default:
    return templateClass
  }
}
