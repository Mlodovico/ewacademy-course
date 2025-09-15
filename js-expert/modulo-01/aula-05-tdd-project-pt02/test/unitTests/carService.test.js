const { describe, it, before} = require('mocha');
const { join } = require('path');

const CarService = require('../../../src/entities/services/carServices');
const { assert } = require('console');

const carsDatabase = join(__dirname, '../../../database', 'cars.json');

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid-customer.json'),
}

describe('CarService', () => {
    let carService = {};
    before(() => {
        carService = new CarService({
            cars: carsDatabase
        });
    });
    it('given a car category it should return an available car', async () => {
        const car = mocks.validCar;
        const carCategory = Object.create(mocks.validCarCategory);
        
    });
});