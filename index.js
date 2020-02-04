#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const reactTemplate = require('./scripts/template-react');
const funcs = require('./scripts/functions');
const log = console.log;
const
    help = argv.help,
    name = funcs.sanitize(argv.name),
    template = funcs.sanitize(argv.template),
    templatePath = funcs.resolveTemplatePath(argv.templatePath, process.env.PWD),
    path = argv.path,
    css = (argv.css && argv.css.length)? funcs.sanitize(argv.css) : argv.css;
const
    location = path ? `${path}` : `.`,
    reactFileName = `${location}/${name}`;

const DEFAULT_JS_EXTENSION = '.js';
const DEFAULT_CSS_EXTENSION = '.css';

const generate = () => {
    fs.readdir(location, () => initScaffold());
};

const initScaffold = () => {
    const namePascalCase = pascalCase(name);
    const cssFileName = ((css && css.length)? css : name).toLowerCase();
    let templateOutput = '';
    try {
        templateOutput = reactTemplate(namePascalCase, template, templatePath, css? cssFileName:'');
    } catch (e) {
        if (e.message.match(/\/\/ Template(.)+ was not found/)) {
            templateOutput = e.message;
        }
    }

    createFile(`${name}${DEFAULT_JS_EXTENSION}`, templateOutput);

    if (css) {
        createFile(`${cssFileName}${DEFAULT_CSS_EXTENSION}`, `.${name} { }`);
    }
};

const createFile = (fileName, content) => {
    fs.appendFile(`${location}/${fileName}`, content, (error) => {
        if (error) {
            log(chalk.red(error));
        } else {
            log(chalk.green(`Added ${location}/${fileName} file`));
        }
    });
};

const pascalCase = (string) => {
    return string.replace(/(\b[a-zA-Z])/g, (g) => (
        g.toUpperCase()
    )).replace(/(\b[-])/g, '');
};

if (help) {
    log(funcs.showHelp());
    return;
}

if (!fs.existsSync(reactFileName+DEFAULT_JS_EXTENSION)) {
    if (funcs.argsValidate([name], ['string'])) {
        generate();
    } else {
        log(chalk.red('Argument "name" is required.'));
    }
} else {
    log(chalk.red('That file already exists, please choose another name.'));
}
