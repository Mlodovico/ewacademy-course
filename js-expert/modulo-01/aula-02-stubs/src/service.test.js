const Service = require('./service');
const assert = require('assert');
const { createSandbox } = require('sinon');

const sandbox = createSandbox();
const mocks = {
    alderaan: {
        name: 'Alderaan',
        rotation_period: '24',
        orbital_period: '364',
        diameter: '12500',
        climate: 'temperate',
        gravity: '1 standard',
        terrain: 'grasslands, mountains',
        surface_water: '40',
        population: '2000000000',
    },
    tatooine: {
        name: 'Tatooine',
        rotation_period: '23',
        orbital_period: '304',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
    },
}

const PLANETS_URL_1 = "https://swapi.dev/api/planets/1/";
const PLANETS_URL_2 = "https://swapi.dev/api/planets/2/";
const PLANETS_URL_3 = "https://swapi.dev/api/planets/3/";

;(async () => {
    // GO TO THE INTERNET
    // {
    //     const service = new Service();
    //     const datas = service.makeRequest(PLANETS_URL_1);
        
    //     console.log('datas', datas);
    // }

    const service = new Service();
    const stub = sinon.stub(service, service.makeRequest.name);

    {
        const fakeResponse = {
            name: 'Tatooine',
            rotation_period: '23',
            orbital_period: '304',
            diameter: '10465',
            climate: 'arid',
            gravity: '1 standard',
            terrain: 'desert',
            surface_water: '1',
            population: '200000',
        };

        stub.withArgs(PLANETS_URL_1).resolves(mocks.tatooine);

        const result = await service.getPlanets(PLANETS_URL_1);
        assert.deepEqual(result, fakeResponse);
    }
})()