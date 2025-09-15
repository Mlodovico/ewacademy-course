const BaseRepository = require("../../repository/base/baseRepository");

class CarService {
    constructor(carRepository) {
        this.carRepository = new BaseRepository({ file: cars });
    }

    getAvailableCar() {
        return null
    }


}

module.exports = CarService;