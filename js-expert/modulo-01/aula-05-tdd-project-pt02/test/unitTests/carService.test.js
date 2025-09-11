const { describe, it, before} = require('mocha');
const { join } = require('path');

const CarService = require('../../../src/entities/services/carServices');

const carsDatabase = join(__dirname, '../../../database', 'cars.json');

describe('CarService', () => {
    let carService = {};
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        });
    });
    it('test', async () => {
        const result = carService.test();
        console.log('result', result);
        // expect(result).to.be.deep.equal();
    });
});