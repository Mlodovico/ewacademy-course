const assert = require('node:assert/strict');
const {createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');

const sinon = createSandbox();

;(async() => {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);

        const results = [...fibonacci.execute(5)];

        const expectedCallCount = 6
        assert.strictEqual(spy.callCount, expectedCallCount);

        const { args } = spy.getCall(2);

        const expectedParams = [3, 1, 2];
        assert.deepStrictEqual(args, expectedParams, `Expected parameters to be ${expectedParams}, but got ${args}`);

        const expectedResult = [0, 1, 1, 2, 3];
        assert.deepStrictEqual(results, expectedResult, `Expected parameters to be ${expectedResult}, but got ${results}`);
    }

    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name);

        for(const sequency of fibonacci.execute(3)) {}
        const expectedCallCount = 4
        assert.strictEqual(spy.callCount, expectedCallCount);
    }
})();