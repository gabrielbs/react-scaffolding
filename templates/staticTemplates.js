module.exports = (options) => {
    let importCss = '';
    if (options.cssFileName) {
        importCss = `import './${options.cssFileName}.css';`;
    }
    let customClassName = '';
    if (options.reactClassName) {
        customClassName = `${options.reactClassName}`;
    }

    switch (options.type) {
        case 'class':
            return (
                `import React, { Component } from 'react';
${importCss}

export default class ${customClassName} extends Component {
  render() {
    return (
      <div></div>
    );
  }
};
`
            );
        case 'pure':
            return (
                `import React, { PureComponent } from 'react';
${importCss}

export default class ${customClassName} extends PureComponent {
  render() {
    return (
      <div></div>
    );
  }
};
`
            );
        case 'function':
            return (
                `import React from 'react';
${importCss}

const ${customClassName} = (props) => (
  <div></div>
);

export default ${customClassName};
`
            );
    }
};
