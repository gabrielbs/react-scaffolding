module.exports = (options) => {
    return (
            `import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ${options.reactClassName} extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.id} - {this.props.name}
                </td>
                <td>
                    {this.props.propA}
                </td>
                <td>
                    {this.props.propB}
                </td>
                <td>
                    {this.props.propC}
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
    propC: PropTypes.string.isRequired,
};

export default ${options.reactClassName};
`
        );
};
