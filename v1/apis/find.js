const codes = require('../data/codes.json');

const find = (code) => {
  if (code) {
    const result = codes[code.replace(/-/, '')];
    return result;
  }
  return null;
};

module.exports = {
  find,
};
