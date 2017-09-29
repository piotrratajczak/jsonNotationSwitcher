const assert = require('assert');
const notationSwitcher = require('../');

describe('jsonNotationSwitcher', () => {
  const camelCaseObj = {
    intValue: 1,
    nullValue: null,
    stringValue: 'string',
    emptyArray: [],
    simpleArray: [1, null, 'string', [], {}],
    complexArray: [[1, null, 'string'], { intValue: 1, objValue: { intValue: 1 } }],
    emptyObject: {},
    simpleObject: {
      intValue: 1, nullValue: null, stringValue: 'string', emptyArray: [], emptyObject: {},
    },
    complexObject: {
      intValue: 1,
      nullValue: null,
      stringValue: 'string',
      emptyArray: [],
      simpleObject: {
        intValue: 1, nullValue: null, stringValue: 'string', emptyArray: [], emptyObject: {},
      },
    },
  };

  const djangoObj = {
    int_value: 1,
    null_value: null,
    string_value: 'string',
    empty_array: [],
    simple_array: [1, null, 'string', [], {}],
    complex_array: [[1, null, 'string'], { int_value: 1, obj_value: { int_value: 1 } }],
    empty_object: {},
    simple_object: {
      int_value: 1, null_value: null, string_value: 'string', empty_array: [], empty_object: {},
    },
    complex_object: {
      int_value: 1,
      null_value: null,
      string_value: 'string',
      empty_array: [],
      simple_object: {
        int_value: 1, null_value: null, string_value: 'string', empty_array: [], empty_object: {},
      },
    },
  };

  const customObj = {
    'int@value': 1,
    'null@value': null,
    'string@value': 'string',
    'empty@array': [],
    'simple@array': [1, null, 'string', [], {}],
    'complex@array': [[1, null, 'string'], { 'int@value': 1, 'obj@value': { 'int@value': 1 } }],
    'empty@object': {},
    'simple@object': {
      'int@value': 1, 'null@value': null, 'string@value': 'string', 'empty@array': [], 'empty@object': {},
    },
    'complex@object': {
      'int@value': 1,
      'null@value': null,
      'string@value': 'string',
      'empty@array': [],
      'simple@object': {
        'int@value': 1, 'null@value': null, 'string@value': 'string', 'empty@array': [], 'empty@object': {},
      },
    },
  };

  const customObj2 = {
    'int-value': 1,
    'null-value': null,
    'string-value': 'string',
    'empty-array': [],
    'simple-array': [1, null, 'string', [], {}],
    'complex-array': [[1, null, 'string'], { 'int-value': 1, 'obj-value': { 'int-value': 1 } }],
    'empty-object': {},
    'simple-object': {
      'int-value': 1, 'null-value': null, 'string-value': 'string', 'empty-array': [], 'empty-object': {},
    },
    'complex-object': {
      'int-value': 1,
      'null-value': null,
      'string-value': 'string',
      'empty-array': [],
      'simple-object': {
        'int-value': 1, 'null-value': null, 'string-value': 'string', 'empty-array': [], 'empty-object': {},
      },
    },
  };

  const doubleDelimiter = {
    'int--value': 1,
    'null--value': null,
    'string--value': 'string',
    'empty--array': [],
    'simple--array': [1, null, 'string', [], {}],
    'complex--array': [[1, null, 'string'], { 'int--value': 1, 'obj--value': { 'int--value': 1 } }],
    'empty--object': {},
    'simple--object': {
      'int--value': 1, 'null--value': null, 'string--value': 'string', 'empty--array': [], 'empty--object': {},
    },
    'complex--object': {
      'int--value': 1,
      'null--value': null,
      'string--value': 'string',
      'empty--array': [],
      'simple--object': {
        'int--value': 1, 'null--value': null, 'string--value': 'string', 'empty--array': [], 'empty--object': {},
      },
    },
  };

  it("switch camelCase to '_'", () => {
    assert.deepEqual(notationSwitcher.switchNotation(camelCaseObj, '_'), djangoObj);
  });

  it('switch camelCase to custom delimiter notation', () => {
    assert.deepEqual(notationSwitcher.switchNotation(camelCaseObj, '@'), customObj);
  });

  it("switch '_' to camelCase", () => {
    assert.deepEqual(notationSwitcher.switchNotation(djangoObj, 'camelCase'), camelCaseObj);
  });

  it("switch '_' to custom notation", () => {
    assert.deepEqual(notationSwitcher.switchNotation(djangoObj, '@'), customObj);
  });

  it('switch custom notation to camelCase', () => {
    assert.deepEqual(notationSwitcher.switchNotation(customObj, 'camelCase'), camelCaseObj);
  });

  it("switch custom notation to '_'", () => {
    assert.deepEqual(notationSwitcher.switchNotation(customObj, '_'), djangoObj);
  });

  it('switch custom notation to another custom notation', () => {
    assert.deepEqual(notationSwitcher.switchNotation(customObj, '-'), customObj2);
  });

  it('switch custom notation to another custom notation 2', () => {
    assert.deepEqual(notationSwitcher.switchNotation(customObj2, '@'), customObj);
  });

  it('switch custom notation with double delimiter to another custom notation', () => {
    assert.deepEqual(notationSwitcher.switchNotation(doubleDelimiter, '@'), customObj);
  });
});
