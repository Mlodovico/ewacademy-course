const { deepStrictEqual } = require("assert");

let couter = 0;
let counter2 = counter;
counter2++;
console.log(counter, counter2);

const item = {counter: 0};
const item2 = item;
item2.counter++;
console.log(item, item2);

// tipo primitivo gera uma copia em memoria
deepStrictEqual(item, 0);
deepStrictEqual(item2, 1);

// tipo referencia aponta para o mesmo endereço de memória
// e aponta para o mesmo lugar
item2.counter++;
deepStrictEqual(item, { counter: 1 });
item.counter++;
deepStrictEqual(item2, { counter: 2 });