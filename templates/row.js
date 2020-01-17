module.exports = (options) => {
    let importCss = '';
    if (options.cssFileName) {
        importCss = `import './${options.cssFileName}.css';`;
    }

    return (
            `import React, {Component} from 'react';
import PropTypes from 'prop-types';
${importCss}

class ${options.reactClassName} extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.id}
                </td>
                <td>
                    {this.props.name}
                </td>
                <td>
                    {this.props.propA}
                </td>
                <td>
                    {this.props.propB}
                </td>
                <td>
                    {this.props.propC? 'true' : 'false'}
                </td>
            </tr>
        );
    }
}

${options.reactClassName}.propTypes = {
    // Class PropTypes
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    propA: PropTypes.string.isRequired,
    propB: PropTypes.string.isRequired,
    propC: PropTypes.bool.isRequired,
};

export default ${options.reactClassName};
`
        );
};
