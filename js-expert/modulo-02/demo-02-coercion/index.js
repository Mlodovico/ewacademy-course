

console.assert(String(123) === '123', "explicit convertion to string");
console.assert(123 + '' === '123', "implicit convertion to string");

if('hello' || 1) {
    console.log('Verdadeiro');
}

// -----------------------------------

const item = {
    name : 'Erick',
    age: 35,
    // string: 1 se n for primitivo, chama o valueOf
    toString() {
        return `name: ${this.name}, age: ${this.age}`;
    },
    // number: 1 se n for primitivo, chama o toString
    valueOf() {
        return 1;
    },
    [Symbol.toPrimitive](coercionType) {
        console.log('trying to convert to ', coercionType);
        const types = {
            string: JSON.stringify(this),
            number: 123
        }
        return types[coercionType] || types.string;
    }
}

console.assert(item + 0 === '{"name":"Erick","age":35}0');
console.assert(!!item);

console.assert('Ae'.concat(item) === 'Ae{"name":"Erick","age":35}');