var socketio = require('socket.io');

// Listen on port 3636
var io = socketio.listen(3636);

io.sockets.on('connection', function (socket) {
    console_out("Broadcast a user's message to everyone else in the room")
    // Broadcast a user's message to everyone else in the room
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });

});


function console_out(msg) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(msg);
    rl.prompt(true);
}