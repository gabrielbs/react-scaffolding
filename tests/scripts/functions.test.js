const funcs = require('../../scripts/functions');

describe('react-scaffolding functions.js tests', () => {
    it('has a helper() function', () => {
        expect(funcs.showHelp).toBeDefined();
    });

    it('returns a string when the helper() function is called', () => {
        expect(typeof funcs.showHelp()).toBe('string');
    });

    it('has an argsValidate() function', () => {
        expect(funcs.argsValidate).toBeDefined();
    });

    it('validates the arguments and returns true if valid', () => {
        let validArgsResult = funcs.argsValidate(['name'], ['string']);
        expect(validArgsResult).toBe(true);
    });

    it('validates the arguments and returns false if not valid', () => {
        let validArgsResult = funcs.argsValidate([12345], ['string']);
        expect(validArgsResult).toBe(false);
    });

    it('has a sanitize() function', () => {
        expect(funcs.sanitize).toBeDefined();
    });

    it('sanitizes the input', () => {
        const dummyInput = [
            null,
            '',
            '<!"£$%> sanitized input </)(*&^>',
            'valid-input',
            'valid_input',
            'valid_input_12345',
        ];
        const expectedSanitizedInput = [
            '',
            '',
            'sanitizedinput',
            'valid-input',
            'valid_input',
            'valid_input_12345',
        ];

        dummyInput.forEach((value, index) => {
            expect(funcs.sanitize(value)).toBe(expectedSanitizedInput[index]);
        });
    });

    it('has a resolveTemplatePath() function', () => {
        expect(funcs.resolveTemplatePath).toBeDefined();
    });

    it('resolves the template path', () => {
        const processPWD = '/absolute/path/to/project';
        const templatePaths = [
            null,
            '',
            '/absolute/path/to/custom/templates',
            'relative/path/to/custom/templates',
            './relative/path/to/custom/templates',
            '.',             // current directory
        ];
        const expectedResult = [
            null,
            '',
            '/absolute/path/to/custom/templates',
            processPWD +'/'+ 'relative/path/to/custom/templates',
            processPWD +'/'+ 'relative/path/to/custom/templates',
            processPWD +'/',
        ];

        templatePaths.forEach((value, index) => {
            expect(funcs.resolveTemplatePath(value, processPWD)).toBe(expectedResult[index]);
        });
    });
});
