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

// O __proto__ de Object.prototype é null
console.log('obj.__proto__ === null', obj.__proto__.__proto__ === null);
assert.deepStrictEqual(obj.__proto__.__proto__, null);

function Employee() {}

Employee.prototype.salary = () => 'salary**';

function Supervisor() {}

Supervisor.prototype = Object.create(Employee.prototype);
Supervisor.prototype.profitShare = () => 'profitShare**';

console.log(Supervisor.prototype.salary())

function Manager() {}

Manager.prototype = Object.create(Supervisor.prototype);
Manager.prototype.monthlyBonus = () => 'monthlyBonus**';

// Podemos chamar via prototype, mas se tentar chamar direto da erro!
console.log(Manager.prototype.profitShare());
// console.log(Manager.prototype.salary());

// se n chamar o new, o primeiro __proto__ vai ser sempre a instancia de Function, sem herdar nossas classes
// Para acessar as classes sem o new, pode acessar direto via prototype
console.log("Manager.prototype.__proto__ === Supervisor.prototype", Manager.prototype.__proto__ === Supervisor.prototype);
assert.deepStrictEqual(Manager.prototype.__proto__, Supervisor.prototype);

console.log("--------------------------------");

// quando chamamos o new o __proto__ recebe o prototype
console.log("manager.__proto__: %s, manager.salary(): %s", new Manager().__proto__, new Manager().salary()); 
console.log(Supervisor.prototype === new Manager().__proto__.__proto__);

console.log("--------------------------------");

const manager = new Manager();
console.log('manager.salary()', manager.salary());
console.log('manager.profitShare()', manager.profitShare());
console.log('manager.monthlyBonus()', manager.monthlyBonus());

console.log("--------------------------------");

class T1 {
    ping() {
        return 'ping'
    }
}

class T2 extends T1 {
    pong() {
        return 'pong'
    }
}

class T3 extends T2 {
    shoot() {
        return 'shoot'
    }
}

const t3 = new T3();

console.log('t3.shoot():', t3.__proto__.__proto__.__proto__.__proto__.__proto__);