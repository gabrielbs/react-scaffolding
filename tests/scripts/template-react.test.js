
// const Adapter = require('enzyme-adapter-react-16');
// const Enzyme = require('enzyme');
// const mount = require('enzyme/mount');
// const shallow = require('enzyme/shallow');
// const React = require('react');
const reactTemplate = require('../../scripts/template-react');

// Enzyme.configure({
//     adapter: new Adapter()
// });

describe('react-scaffolding template-react.js tests', () => {
    // General config here if applicable

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
        Object.keys(expectedOutput).forEach((key, index) => {
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
        Object.keys(expectedOutput).forEach((key, index) => {
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
        Object.keys(expectedOutput).forEach((key, index) => {
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
        Object.keys(expectedOutput).forEach((key, index) => {
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
        Object.keys(expectedOutput).forEach((key, index) => {
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
        Object.keys(expectedOutput).forEach((key, index) => {
            expect(templateOutput).toMatch(expectedOutput[key]);
        });
    });

    it('throws an exception when the template does not exist', () => {
        let templateOutput;
        expect(
            () => {
                templateOutput = reactTemplate('TestWrapper', 'false_template', '../templates')
            }
        ).toThrow();
        const expectedOutput = {
            //'templateNotFound': '// Template "../templates/false_template" was not found',
            'templateNotFound': undefined,
        };

        expect(typeof templateOutput).toBe('undefined');
        expect(templateOutput).toBeUndefined();

        // TODO try to extract the message from the exception and mock the console.log and console.error
        //  to not appear on the tests output
    });
});
