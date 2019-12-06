module.exports = (options) => {
    const addingCss = `import './${options.className.toLowerCase()}.css'`;

    switch (options.type) {
        case 'class':
            return (
                `import React, { Component } from 'react';
${addingCss};

export default class ${options.className} extends Component {
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
${addingCss};

export default class ${options.className} extends PureComponent {
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
${addingCss};

const ${options.className} = (props) => (
  <div></div>
);

export default ${options.className};
`
            );
    }
};
