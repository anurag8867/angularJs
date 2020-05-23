// cluster.js
const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }
    const updateWorkers = () => {
        // const usersCount = numberOfUsersInDB();
        const usersCount = 10;
        Object.values(cluster.workers).forEach(worker => {
            worker.send({ usersCount });
        });
    };

    updateWorkers();
    setInterval(updateWorkers, 10000);
} else {
    require('./server');
}
process.on('message', msg => {
    msg = JSON.stringify(msg)
    console.log(`Message from master: ${msg}`);
});