module.exports = (options) => {
    return (
            `import React, { Component } from 'react';

export default class ${options.reactClassName} extends Component {
    render() {
        return (
            <div>Wrapper Template</div>
        );
    }
};
`
        );
};
