class Service {
    async makeRequest(url) {
        return (await fetch(url)).json();
   }

    async getPlanets(url) {
        const data = await this.makeRequest(url);
        return {
            name: data.name,
            rotation_period: data.rotation_period,
        };
    }
}

module.exports = Service;