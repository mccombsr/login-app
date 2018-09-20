const express = require('express'); //this is a library w/ methods to help build a server
const bodyParser = require('body-parser');
const app = express();
const ctrl = require('./controller');

app.use(bodyParser.json())

//endpoints
app.get('/api/health-check', ctrl.healthCheck)

app.post('/api/login', ctrl.login)


app.listen(1337, listening(1337))

function listening(portNum) {
    console.log(`listening on port ${portNum}`)
}