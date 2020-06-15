const http = require('http').createServer();
const io = require('socket.io')(http);
const port = 3005;
const NodeRSA = require('node-rsa');
const key = new NodeRSA({ b: 512 });
const { spawn } = require("child_process");
//To DO Implement RSA
// key.encrypt(cmd, 'base64')

io.on('connection', (socket) => {
    let events = [];
    socket.on('message', (evt) => {
        //PriorityQueue
        events.push(evt);

        while (events && events.length) {
            let evt = events.shift();
            //If the type is command then it should enter into if case otherwise it go for else case
            if (evt && evt.type && evt.type === "command") {

                let spl = evt.arg.split(" "),
                    ls = spawn(spl[0], spl.slice(1));

                ls.stdout.on("data", data => {
                    //Command response will be shared to the user, who initializes these commands
                    io.to(socket.id).emit('Command', {
                        cmd: data,
                        username: evt.username
                    });
                });

                ls.on("close", code => {
                    evt.type = null;
                    evt.arg = null;
                    io.to(socket.id).emit('Command', {
                        cmd: `child process exited with code ${code}`,
                        username: evt.username
                    });
                });

                ls.stderr.on("data", data => {
                    console.log(`stderr: ${data}`);
                });

                ls.on('error', (error) => {
                    console.log(`error: ${error.message}`);
                });

            } else {
                //Text messages will be broadcasted to all the users whoever is connected to the socket
                socket.broadcast.emit('message', evt);
            }

        }
    });
});

io.on('disconnect', (evt) => {
    console.log('disconnected')
});

http.listen(port, () => console.log(`server listening on port: ${port}`))