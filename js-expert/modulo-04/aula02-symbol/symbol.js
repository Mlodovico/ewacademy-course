const assert = require('assert');

const unqueKey = Symbol('userName');
const user = {};

user[unqueKey] = 'value for userName';
user['userName'] = 'value for userName 2';

console.log('getting normal Objects', user.userName);
 
assert.deepStrictEqual(user.userName, 'value for normal Objects');

// sempre unico a nivel de endereço de memória
assert.deepStrictEqual(user[Symbol('userName')], undefined);
assert.deepStrictEqual(user[unqueKey], 'value for userName');

// é dificil de pegar, mas n é secreto
assert.deepStrictEqual(Object.getOwnPropertyNames(user)[0], unqueKey);

// Well known Symbols
const obj = {
    [Symbol.iterator]: () => ({
        items: ['c', 'b', 'a'],
        count: 0,
        next() {
            return {
                done: this.items.length === 0,
                value: this.items.pop(),
            };
        },
    })
}

assert.deepStrictEqual([...obj], ['a', 'b', 'c']);

const kItems = Symbol('kItems');
class MyDate {
    constructor(...args) {
        this[kItems] = args.map(arg => new Date(...arg));
    }
}

const myDate = new MyDate(
    [2024, 2, 1],
    [2023, 1, 1],
);

const expected = [
    new Date(2024, 2, 1),
    new Date(2023, 1, 1)
];

