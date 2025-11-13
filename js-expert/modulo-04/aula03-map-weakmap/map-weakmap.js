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

// Nao da para iterar em Objects diretamente
// tem que transformar com o Object.entries(item)
assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1, "one"], ["Erick", { "text": "two"}], [true, () => {}]]))

const actor = {
    name: 'Erick Wendel',
    toString: "Queen's Gambit"
}

myMap.set(actor);

assert.ok(myMap.has(actor));
assert.throws(() => myMap.get({ name: 'Erick Wendel', toString: "Queen's Gambit" }));

// limpar o map 
myMap.clear();
assert.deepStrictEqual(myMap.size, 0);

// ---------------------------------------------------- 

// WeakMap
// Pode ser coletado após perder as referencias
// usado em casos beeeeeem especificos
// MAS: Ñ é iterável, não tem size, não tem clear
// mais leve e preve o memorie leak, porque depois que as instancias saem da memroia, tudo é limpo

const weakMap = new WeakMap();
const hero = { name: 'Flash' };

weakMap.set(hero);
weakMap.get(hero);
weakMap.delete(hero);
