const jose = require('node-jose');
const fs = require('fs');

const args = process.argv.slice(2);

const key = fs.readFileSync(args[0]);

var DUMP_PRIVATE_KEY = ('true' == args[1]);

jose.JWK.asKey(key)
  .then(function(key) {
    console.log(key.toPEM(DUMP_PRIVATE_KEY));
  });