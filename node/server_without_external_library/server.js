const hostname = '127.0.0.1';
const port = 3800;

const server = require('./controller.js');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});