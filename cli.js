#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var inliner = require('./');
var inlined = inliner(argv).toString();
console.log(inlined);
