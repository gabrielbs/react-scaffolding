#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));
const reactTemplate = require('./template-react');
const funcs = require('./funcs');
const log = console.log;
const name = argv.name;
const option = argv.option;
const path = argv.path;
const file = path ? `${path}/${name}` : `${name}`;
const location = `${file}/${file}`;

const generate = () => {
    fs.mkdir(file, () => initScaffold());
};

const initScaffold = () => {
    const nameCalebCase = calebCase(name);
    createFile(`${name}.js`, reactTemplate(nameCalebCase, option));
    createFile(`${name}.css`, `.${name} { }`);
};

const createFile = (name, content) => {
    fs.appendFile(`${file}/${name}`, content, (error) => {
        if (error) {
            log(chalk.red(error));
        } else {
            log(chalk.green(`Add ${name} file`));
        }
    })
};

const calebCase = (string) => (
    string.replace(/(\b[a-zA-Z])/g, (g) => (
        g.toUpperCase()
    )).replace(/(\b[-])/g, '')
);

if (!fs.existsSync(file)) {
    if (funcs.argsValidate([name, option], ['string', 'string'])) {
        generate();
    } else {
        log(chalk.red('Arguments name and option are required.'));
    }
} else {
    log(chalk.red('That file already exists, please choose another name.'));
}
