const BaseRepository = require("../../repository/base/baseRepository");

class CarService {
    constructor(carRepository) {
        this.carRepository = new BaseRepository({ file: cars });
    }

    getRandomPositionFromArray(list) {
        const listLength = list.length;

        return Math.floor(
            Math.random() * (listLength)
        )
    }

    chooseRandomCar(carCategory) {
        const randomCarIndex = this.getRandomPositionFromArray(carCategory.carIds);
        const cardId = carCategory.carIds(randomCarIndex);

        return cardId;
    };

    getAvailableCar() {
        return null
    }


}

module.exports = CarService;