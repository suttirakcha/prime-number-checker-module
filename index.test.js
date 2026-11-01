const assert = require("node:assert/strict");
const primeNumberChecker = require("./index");

assert.strictEqual(primeNumberChecker.isPrime(2), true);
assert.strictEqual(primeNumberChecker.isPrime(3), true);
assert.strictEqual(primeNumberChecker.isPrime(5), true);
assert.strictEqual(primeNumberChecker.isPrime(8), false);