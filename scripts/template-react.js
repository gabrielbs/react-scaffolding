const fs = require('fs');
const getTemplate = require('../templates/staticTemplates');

module.exports = (className, template = 'class', cssFileName = '') => {
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
                const customTemplate = require(`../templates/${template}`);
                return customTemplate({reactClassName: className});
            } catch (e) {
                console.error(e);
                return;
            }

            return getTemplate({reactClassName: className, type: 'class', cssFileName: cssFileName});
    }
};
