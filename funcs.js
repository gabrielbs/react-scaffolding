/**
 * argsValidate - Check arguments
 *
 * @param {array} args  Description
 * @param {array} types Description
 *
 * @return {bool} Description
 */
const argsValidate = (args, types) => {
  const validate = args.filter((arg, index) => typeof arg === types[index])

  if (args.length === validate.length) {
    return true
  } else {
    return false
  }
}

module.exports = {
  argsValidate
}
