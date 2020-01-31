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
    return (
        'With React Scaffolding you can create different types of components '+
        'based on templates that can be customized to suit your project needs.\n' +
        '\n' +
        'Usage: react-scaffolding [OPTIONS]...\n'+
        '\n' +
        'IMPORTANT!:\n' +
        '  You MUST ensure that the target directories already exist and you have read and write permissions to them!\n' +
        '\n' +
        'Examples:\n' +
        '  > react-scaffolding --name=MyContainer --path=path_to_my_folder\n' +
        '  > react-scaffolding --name=MyContainer --path="path to my folder" --template=class\n' +
        '  > react-scaffolding --name=CustomContainer --path=pathToMyFolder --template=customTemplate --templatePath path_to_scaffold_templates\n' +
        '\n' +
        'Mandatory arguments:\n' +
        '  --name            Your component name\n' +
        '\n' +
        'Options:\n' +
        '  --help            Ignores all other options and shows this message\n' +
        '  --path            The directory where the component will be placed\n' +
        '  --template        The template that will be used to create your component\n' +
        '                    Those are the available templates:\n' +
        '                    - class     (default)\n' +
        '                    - pure\n' +
        '                    - function\n' +
        '                    - wrapper\n' +
        '                    - container (intended to work with row)\n' +
        '                    - row       (intended to work with container)\n' +
        '  --templatePath    The directory where to read the templates files from\n' +
        '  --css             Allows the creation of a default css file and imports it on the component.\n'+
        '                    - If no filename is passed, then the same name as the --name option will be used.\n' +
        '                    - If a file name is passed, then creates the default css file with the given name.\n'
    );
};

const sanitize = (text) => {
    if (!text || !text.length) {
        return '';
    }

    return text.replace(/[^\w_-]/gi,'');
};

const resolveTemplatePath = (templatePath, processPWD) => {
    let path = templatePath;

    if (!path) {
        return path;
    }

    if (path.startsWith('./')) {
        path = path.replace('.', processPWD);
    } else if (path.startsWith('.')) {
        path = path.replace('.', processPWD+'/');
    }

    if (!path.startsWith('/')) {
        path = processPWD+'/'+path;
    }

    return path;
};

module.exports = {
    argsValidate,
    showHelp,
    sanitize,
    resolveTemplatePath,
};
