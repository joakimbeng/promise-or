# promise-or

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> The OR (||) operator for promises

## Installation

Install `promise-or` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-or
```

## Usage

### Module usage

```javascript
var or = require('promise-or');

or(Promise.resolve(false), Promise.resolve(true))
  .then(function (val) {
    // val === true
  });
```

## API

### `or(...args)`

| Name | Type | Description |
|------|------|-------------|
| `...args` | `Mixed`| Values to run || between |

Returns: `Promise`, which resolvs to the first "truthy" value among the arguments.

## Related

* [`promise-and`](https://github.com/joakimbeng/promise-and)
* [`promise-not`](https://github.com/joakimbeng/promise-not)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-or
[npm-image]: https://badge.fury.io/js/promise-or.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-or
[travis-image]: https://travis-ci.org/joakimbeng/promise-or.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
