module.exports = (options) => {
    let importCss = '';
    if (options.cssFileName) {
        importCss = `import './${options.cssFileName}.css';`;
    }

    return (
            `import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Please see notes in fetchData() function
//import { fetch } from 'whatwg-fetch';
${importCss}

class ${options.reactClassName} extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // TODO add state properties
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        // TODO write some logic before the render

        return (
            <div>
                React wrapper for class ${options.reactClassName}
                <p>This is where you call your &lt;container&gt;</p>
            </div>
        );
    }

    fetchData() {
    // TODO to use fetch you must first install its module and dependencies
    // This can be done via npm
    // > npm install fetch

//        let url = 'my_custom_url';
//
//        fetch(url)
//            .then(response => {
//                if (!response.ok) {
//                    // do some error handling
//                    return;
//                }
//
//                response.json()
//                    .then(data => {
//                        // implement success case
//                    })
//                    .catch(error => {
//                        // handle errors while processing the success case
//                        console.error(error);
//                    });
//            });
    }
}

${options.reactClassName}.propTypes = {
    // Class propTypes
};

export default ${options.reactClassName};
`
        );
};
