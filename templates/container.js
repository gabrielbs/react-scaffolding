module.exports = (options) => {
    let importCss = '';
    if (options.cssFileName) {
        importCss = `import './${options.cssFileName}.css';`;
    }

    return (
            `import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ${options.reactClassName}Row from './${options.reactClassName}Row';
${importCss}

class ${options.reactClassName} extends Component {

    constructor(props) {
        super(props);

        this.emptyTable = <h4>
            No results found
        </h4>;
        this.tableColumns = [
            'ID',
            'Name',
            'Prop A',
            'Prop B',
            'Prop C',
        ];
        this.tableRows = [
            {
                id: 1,
                name: 'Row 1',
                propA: 'Lorem ipsum',
                propB: 'dolor sit amet',
                propC: true,
            },
            {
                id: 2,
                name: 'Row 2',
                propA: 'Lorem ipsum',
                propB: 'consectetur adipiscing elit',
                propC: false,
            },
            {
                id: 3,
                name: 'Row 3',
                propA: 'Lorem ipsum',
                propB: 'Duis aute irure',
                propC: false,
            },
        ];
    }

    render() {
        let table = this.emptyTable;

        if (this.tableRows.length) {
            table =
                <table className="table">
                    <thead>
                        <tr>
                            {this.getTableColumns().map((columnName, index) => {
                                let key = columnName;
                                if (key === '') {
                                    key = index;
                                }
                                return (
                                    <th scope="col" key={key}>
                                        {columnName}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTableRows().map(row => {
                            return row;
                        })}
                    </tbody>
                </table>;
        }

        return (
            <div className="container">
                <h3 className="card-title">
                    Panel Title
                </h3>
                <div className="card-body">
                    {table}
                </div>
            </div>
        );
    }
    
    getTableColumns() {
        return this.tableColumns;
    }

    getTableRows() {
        let mappingFunction = (row) => {
            return (
                <${options.reactClassName}Row
                    id={row.id}
                    key={row.id}
                    name={row.name}
                    propA={row.propA}
                    propB={row.propB}
                    propC={row.propC}
                />
            );
        };

        return this.tableRows.map(mappingFunction);
    }
}

${options.reactClassName}.propTypes = {
    // Class PropTypes
};

export default ${options.reactClassName};
`
        );
};
