# JsonNotationSwitcher
**Usage:**
There is one simple function:
```
switchNotation(obj, to)
```
example:
```
var switchNotation = require('jsonNotationSwitcher');
var obj = {
    'camelCase': 1,
    'camelCaseObject': {
        'camelCaseInside': 'test'
    }
};
var result  = switchNotation(obj, '---');
/*
result is equal to:
{
    'camel---case': 1,
    'camel---case---object': {
        'camel---case---inside': 'test'
    }
}
*/
```
**Parameters**:
it takes two parameters:
**obj** - obj to  be changed,
**to** - new delimiter ('camelCase' *, '_', '-', or any other string expression)

* **camelCase** is an exception - it will change char size:
```
var result = switchNotation({camel_case: 1 }, 'camelCase');
/* gives result equal to:
{camelCase: 1} */
```
 any other string will be trated as exactly defined delimiter, so:
```
 var result = switchNotation({camel_case: 1 }, 'camelcase');
/* gives result equal to:
{camelcamelcasecase: 1} */
```
**Limits / disadventages:**
It work well with typical notations like:
camelCase, underscore_notation, other-notation, "another@notation", but
if your obj has more than one **NOT** char/digit signs, it will be lost in transformation:
```
var obj = {"aaa-_-bbb": 'test'};
var result = switchNotation(obj, '-');
/*
result = { "aaa---bbb": 'test' }
*/
```

#About:
It's hard to call it a module. Everything that happens here is calling a proper module (camelcase-kyes-recursive or camelcasetodjango) as it is needed.

Both are avaible separatly:

[camelcase-keys-recursive](http://www.npmjs.com/package/camelcase-keys-recursive) - was made by [mikeljames](http://www.npmjs.com/~mikeljames)

[camelcasetodjango](http://www.npmjs.com/package/camelcasetodjango) - is mine and was published earlier.

# Installation:
```sh
$ npm install json-notation-switcher
```

# Testing:
There are few simple tests in 'test' folder. If you want to run it, you need to have Mocha and Chai installed.
```sh
$ cd node_modules/json-notation-switcher
$ npm install
$ npm run test
```
#License:

MIT
