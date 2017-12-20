const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');
const cors = require('cors');

const server = express();

const corsOptions = {
	"origin": "*",
	"methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204
};

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(cors());
server.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const routes = require('./routes/routes.js');
routes(server);

const port = 5000;

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
