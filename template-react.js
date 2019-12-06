const getTemplate = require('./getTemplate');

module.exports = (className, option = 'class') => {
    const addingCss = `import './${className.toLowerCase()}.css'`;

    const templateClass = getTemplate({className, type: 'class'});
    const templatePure = getTemplate({className, type: 'pure'});
    const templateFunction = getTemplate({className, type: 'function'});


    switch (option) {
        case 'class':
            return templateClass;
        case 'function':
        case 'func':
            return templateFunction;
        case 'pureComponent':
        case 'pure':
            return templatePure;
        default:
            return templateClass;
    }
};
