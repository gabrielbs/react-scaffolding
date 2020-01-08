#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const reactTemplate = require('./template-react');
const funcs = require('./funcs');
const log = console.log;
const
    help = argv.help,
    name = argv.name,
    option = argv.option,
    path = argv.path,
    css = argv.css,
    file = path ? `${path}/${name}` : `${name}`,
    location = `${file}`;

const generate = () => {
    fs.mkdir(file, () => initScaffold());
};

const initScaffold = () => {
    const namePascalCase = pascalCase(name);
    createFile(`${name}.js`, reactTemplate(namePascalCase, option));
    if (css) {
        const cssFileName = css.length? css : name;
        createFile(`${cssFileName}.css`, `.${name} { };`);
    }
};

const createFile = (name, content) => {
    fs.appendFile(`${file}/${name}`, content, (error) => {
        if (error) {
            log(chalk.red(error));
        } else {
            log(chalk.green(`Add ${name} file`));
        }
    });
};

const pascalCase = (string) => {
    string.replace(/(\b[a-zA-Z])/g, (g) => (
        g.toUpperCase()
    )).replace(/(\b[-])/g, '');
};

if (help) {
    funcs.showHelp();
    return;
}

if (!fs.existsSync(file)) {
    if (funcs.argsValidate([name], ['string'])) {
        generate();
    } else {
        log(chalk.red('Argument "name" is required.'));
    }
} else {
    log(chalk.red('That file already exists, please choose another name.'));
}
