const camelCaseToDjango = require('camelcasetodjango');
const camelCaseKeysRecursive = require('camelcase-keys-recursive');

exports.switchNotation = function switchNotation(obj, to) {
  return (to === 'camelCase') ? camelCaseKeysRecursive(camelCaseToDjango(obj)) : camelCaseToDjango(obj, to);
};
