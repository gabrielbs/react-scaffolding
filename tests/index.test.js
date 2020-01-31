
// const Adapter = require('enzyme-adapter-react-16');
// const Enzyme = require('enzyme');
// const mount = require('enzyme/mount');
// const shallow = require('enzyme/shallow');
// const React = require('react');
const funcs = require('../scripts/functions');

// Enzyme.configure({
//     adapter: new Adapter()
// });

describe('react-scaffolding', () => {
    // General config here if applicable

    it('has a helper() function', () => {
        expect(funcs.showHelp).toBeDefined();
    });

    it('returns a string when the helper() function is called', () => {
        expect(typeof funcs.showHelp()).toBe('string');
    });
});
