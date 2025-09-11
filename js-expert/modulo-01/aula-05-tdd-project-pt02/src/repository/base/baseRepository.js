const { readFile } = require('fs/promise');

class BaseRepository {
    constructor({ file }) {
        this.file = file
    }

    async find(itemId) {
        const content = JSON.parse(await readFile(this.file));

        return content.find(({ id }) => id === itemId);
    }
}

module.exports = BaseRepository;