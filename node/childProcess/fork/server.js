const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000;
const cors = require('cors');
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


const { fork } = require('child_process');


app.get('/longComputation', async function (req, res) {
    const forked = fork('/home/springrole/projects/angularJs/node/childProcess/fork/child.js');
    const forked1 = fork('/home/springrole/projects/angularJs/node/childProcess/fork/child copy.js');
    forked.send({ hello: 'world' });
    forked1.send({ hello: 'world' });
    let message = null, message1 = null;
    forked.on('message', (msg) => {
        message = msg;
        console.log('Message from child', msg);
    });
    forked1.on('message', (msg) => {
        message1 = msg;
        console.log('Message from child2', msg);
        return res.send({
            resp: msg
        });
    });

    return res.send({
        resp: longComputation()
    });
});