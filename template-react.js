module.exports = (className, option = 'class') => {
  const addingCss = `import './${className.toLowerCase()}.css'`
  const templateClass =
`import React, { Component } from 'react'
${addingCss}

export default class ${className} {
  render() {
    return(
      <div></div>
    )
  }
}`

  const templateFunction =
`import React from 'react'
${addingCss}

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
