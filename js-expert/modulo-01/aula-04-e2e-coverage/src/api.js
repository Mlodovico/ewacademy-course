const http = require('http');
const { once } = require('events');

const DEFAULT_USER = {
    username: 'MuriloLodovico',
    password: '123'
}

const routes = {
    '/contact:get': (req, res) => {
        res.write('Contact us page');
        return res.end();
    },
    '/login:post': async (req, res) => {
        const user = JSON.parse(await once(req, 'data'));
        const toLower = text => text.toLowerCase();

        if(
            toLower(user.username) !== toLower(DEFAULT_USER.username) || 
            user.password !== DEFAULT_USER.password
        ) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Login failed' }));
            return;
        }

        return res.end("Login successful");
    },
    default(req, res) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });

        return res.end('Not Found');
    }
}

function handler(req, res) {
    const { url, method } = req;

    const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.default;
    return chosen(req, res);
}

const app = http.createServer(handler).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

module.exports = app;