const http = require('http');
const url = require('url');

class Route {
    constructor(carService) {
        this.carService = carService;
    }

    async handler(request, response) {
        const { pathname } = url.parse(request.url, true);

        if (pathname === '/rent') {
            const carCategory = {
                id: '1',
                name: 'Categoria 1',
                carIds: ['1', '2'],
                price: 37.6
            };
            const customer = {
                age: 20,
                name: 'Customer 1'
            };
            const numberOfDays = 5;

            const result = await this.carService.rent(
                customer,
                carCategory,
                numberOfDays
            );

            response.writeHead(200, { 'Content-Type': 'application/json' });
            return response.end(JSON.stringify(result));
        }

        response.writeHead(404);
        return response.end();
    }

    init(port) {
        http.createServer(this.handler.bind(this))
            .listen(port, () => console.log(`Server running at port: ${port}`));
    }
}

module.exports = Route;