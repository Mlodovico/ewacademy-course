const Route = require('./routes/route');
const CarService = require('./services/carServices');

const PORT = 3000;

const carService = new CarService({
    cars: []
});

const route = new Route(carService);
route.init(PORT);