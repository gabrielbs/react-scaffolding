/**
 * argsValidate - Check arguments
 *
 * @param {array} args  Description
 * @param {array} types Description
 *
 * @return {boolean} Description
 */
const argsValidate = (args, types) => {
    const validate = args.filter((arg, index) => typeof arg === types[index]);

    if (args.length === validate.length) {
        return true;
    }

    return false;
};

const showHelp = () => {
    console.log(
        'With React Scaffolding you can create different types of components '+
        'based on templates that can be customized to suit your project needs.\n' +
        '\n' +
        'Usage: react-scaffolding [OPTIONS]...\n'+
        '\n' +
        'Mandatory arguments:\n' +
        '--name                 Your component name\n' +
        '\n' +
        'Options:\n' +
        '--path                 The path where the component will be placed\n' +
        '--template             The template that will be used to create your component\n' +
        '--templatePath         The template where to read the templates files from\n' +
        '--css                  Allows the creation of a default css file.\n'+
        '                       - If no filename is passed, then the same name as the --name option will be used.\n' +
        '                       - If a file name is passed, then creates the default css file with the given name.\n'
    );
};

const sanitize = (text) => {
    if (!text) {
        return '';
    }

    return text.replace(/[^\w_-]/gi,'');
};

module.exports = {
    argsValidate,
    showHelp,
    sanitize,
};
