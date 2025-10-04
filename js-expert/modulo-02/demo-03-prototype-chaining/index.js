const assert = require("assert");

const obj = {}
const arr = []
const fn = () => {}

// Internamente, objetos literais viram funções explicitas

console.log("new Object() is {}", new Object().__proto__ === {}.__proto__);
assert.deepStrictEqual(new Object().__proto__, {}.__proto__);

console.log('obj.__proto__ === Object.prototype', obj.__proto__ === Object.prototype);
assert.deepStrictEqual(obj.__proto__, Object.prototype);

console.log('arr.__proto__ === Array.prototype', arr.__proto__ === Array.prototype);
assert.deepStrictEqual(arr.__proto__, Array.prototype);