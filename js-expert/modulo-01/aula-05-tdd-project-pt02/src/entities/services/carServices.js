const BaseRepository = require("../../repository/base/baseRepository");

class CarService {
    constructor(carRepository) {
        this.carRepository = new BaseRepository({ file: cars });
    }

    test() {
        return this.carRepository.find()
    }


}

module.exports = CarService;