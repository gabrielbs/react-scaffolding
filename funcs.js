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
    // TODO
    console.log('This is how you use the module');
};

module.exports = {
    argsValidate,
    showHelp,
};
