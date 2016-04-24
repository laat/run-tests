# run-tests [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url]

[travis-image]: https://img.shields.io/travis/laat/run-tests.svg?style=flat
[travis-url]: https://travis-ci.org/laat/run-tests
[npm-image]: https://img.shields.io/npm/v/run-tests.svg?style=flat
[npm-url]: https://npmjs.org/package/run-tests

> Run tests.


## Install

```
$ npm install --save run-tests
```

## Usage

```
$ run-tests --help
Usage:
  run-tests [--require=<module>...] <file>...

Options:
  -r <module>, --require=<module>   Require a given module
```

```
$ run-tests -r babel-register test.js
$ run-tests tests/**/*.js
$ run-tests 'tests/**/*.js'
```

## License

MIT © [Sigurd Fosseng](https://github.com/laat)
