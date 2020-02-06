const fs = require('fs');
const getTemplate = require('../templates/staticTemplates');
const chalk = require('chalk');

module.exports = (className, template = 'class', templatePath = '../templates', cssFileName = '') => {
    // Static Templates
    switch (template) {
        case 'class':
            return getTemplate({reactClassName: className, type: 'class', cssFileName: cssFileName});
        case 'function':
        case 'func':
            return getTemplate({reactClassName: className, type: 'function', cssFileName: cssFileName});
        case 'pureComponent':
        case 'pure':
            return getTemplate({reactClassName: className, type: 'pure', cssFileName: cssFileName});
        default:
            // Custom Templates
            try {
                const customTemplate = require(`${templatePath}/${template}`);
                return customTemplate({reactClassName: className, cssFileName: cssFileName});
            } catch (e) {
                console.log(chalk.red(`Template "${templatePath}/${template}" was not found`));
                console.error(e);
                throw new Error(`// Template "${templatePath}/${template}" was not found`);
            }
    }
};
