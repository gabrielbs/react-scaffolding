const reactTemplate = require('../../scripts/template-react');

describe('react-scaffolding template-react.js tests', () => {
    it('has a default nameless function', () => {
        expect(reactTemplate()).toBeDefined();
    });

    it('returns the "class" template', () => {
        const templateOutput = reactTemplate('TestClass', 'class', '../templates');
        const expectedOutput = {
            'importReact': 'import React, { Component } from \'react\';',
            'exportClass': 'export default class TestClass extends Component',
            'renderDiv': '<div></div>',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('returns the "class" template with a css file import', () => {
        const templateOutput = reactTemplate('TestClass', 'class', '../templates', 'testCSSFile');
        const expectedOutput = {
            'importCss': 'import \'./testCSSFile.css\';',
            'exportClass': 'export default class TestClass extends Component',
            'renderDiv': '<div></div>',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('returns the "function" template', () => {
        const templateOutput = reactTemplate('testFunction', 'function');
        const expectedOutput = {
            'exportClass': 'const testFunction = (props) =>',
            'renderDiv': '<div></div>',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('returns the "pureComponent" template', () => {
        const templateOutput = reactTemplate('TestComponent', 'pureComponent');
        const expectedOutput = {
            'exportClass': 'export default class TestComponent extends PureComponent',
            'renderDiv': '<div></div>',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('returns the "wrapper" template', () => {
        const templateOutput = reactTemplate('TestWrapper', 'wrapper', '../templates');
        const expectedOutput = {
            'importReact': 'import React, { Component } from \'react\';',
            'importPropTypes': 'import PropTypes from \'prop-types\';',
            'defineClass': 'class TestWrapper extends Component',
            'renderDiv': '<div>\n' +
                '                React wrapper for class TestWrapper\n' +
                '                <p>This is where you call your &lt;container&gt;</p>\n' +
                '            </div>',
            'definePropTypes': 'TestWrapper.propTypes',
            'exportDefault': 'export default TestWrapper;',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('returns the "wrapper" template with a css file import', () => {
        const templateOutput = reactTemplate('TestWrapper', 'wrapper', '../templates', 'testCSSFile');
        const expectedOutput = {
            'importReact': 'import React, { Component } from \'react\';',
            'importPropTypes': 'import PropTypes from \'prop-types\';',
            'importCss': 'import \'./testCSSFile.css\';',
            'defineClass': 'class TestWrapper extends Component',
            'renderDiv': '<div>\n' +
                '                React wrapper for class TestWrapper\n' +
                '                <p>This is where you call your &lt;container&gt;</p>\n' +
                '            </div>',
            'definePropTypes': 'TestWrapper.propTypes',
            'exportDefault': 'export default TestWrapper;',
        };

        expect(typeof templateOutput).toBe('string');
        Object.keys(expectedOutput).forEach((key) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('throws an exception when the template does not exist', () => {
        // mock the console.log and console.error to prevent the messages from appearing on the tests output
        global.console.log = () => {};
        global.console.error = () => {};

        const expectedExceptionMessage = '// Template "../templates/false_template" was not found';
        expect(
            () => {
                reactTemplate('TestWrapper', 'false_template', '../templates')
            }
        ).toThrow(expectedExceptionMessage);

        expect(typeof templateOutput).toBe('undefined');
    });
});
