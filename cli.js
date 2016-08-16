#!/usr/bin/env node
/* eslint-disable global-require, import/newline-after-import */
require('loud-rejection/register');
var docopt = require('docopt').docopt;
var resolveModule = require('resolve').sync;
var resolvePath = require('path').resolve;
var glob = require('glob');

var doc = [
  'Usage:',
  '  run-tests [--require=<module>...] <file>...',
  '',
  'Options:',
  '  -r <module>, --require=<module>   Require a given module',
].join('\n');
var args = docopt(doc, { version: require('./package.json').version });
var cwd = process.cwd();

args['--require'].forEach(function (module) {
  require(resolveModule(module, { basedir: cwd }));
});

args['<file>'].forEach(function (arg) {
  glob(arg, function (err, files) {
    files.forEach(function (file) {
      require(resolvePath(cwd, file));
    });
  });
});
