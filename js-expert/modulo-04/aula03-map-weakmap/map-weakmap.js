const assert = require('assert');
const myMap = new Map();

myMap
    .set(1, 'one')
    .set('Erick', { age: 35 })
    .set(true, () => 'hello')

const myMapWithConstructor = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1'],
])

console.log('myMap', myMap);

assert.deepStrictEqual(myMap.get(1), 'one');
assert.deepStrictEqual(myMap.get('Erick'), { age: 35 });
assert.deepStrictEqual(myMap.get(true), () => 'hello');

const onlyReferenceWorks = { id: 1 };
myMap.set(onlyReferenceWorks, { name: 'Erick' });

assert.deepStrictEqual(myMap.get(onlyReferenceWorks), { name: 'Erick' });

// para verificar o tamanho do map
assert.deepStrictEqual(myMap.size, 4);

// para verificar se o item existe no map
assert.ok(myMap.has(onlyReferenceWorks));

// para deletar o item do map
assert.ok(myMap.delete(onlyReferenceWorks));
