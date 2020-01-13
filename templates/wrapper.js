module.exports = (options) => {
    return (
            `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetch } from 'whatwg-fetch';

class ${options.reactClassName}Wrapper extends Component {
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
        let url = 'my_custom_url';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    // do some error handling
                    return;
                }

                response.json()
                    .then(data => {
                        // implement success case
                    })
                    .catch(error => {
                        // handle errors while processing the success case
                        console.error(error);
                    });
            });
    }
}

${options.reactClassName}Wrapper.propTypes = {
    // Class propTypes
};

export default ${options.reactClassName}Wrapper;
`
        );
};
