module.exports = (className, option = 'class') => {
  const addingCss = `import './${className.toLowerCase()}.css'`

  const templateClass =
`import React, { Component } from 'react'
${addingCss}

export default class ${className} extends Component {
  render() {
    return(
      <div></div>
    )
  }
}`

  const templatePure =
`import React, { PureComponent } from 'react'
${addingCss}

export default class ${className} extends PureComponent {
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
  case 'func':
    return templateFunction
  case 'pureComponent':
  case 'pure':
    return templatePure
  default:
    return templateClass
  }
}
