# run-tests

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
