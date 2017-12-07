const express = require('express');
const bodyParser = require('body-parser');

const postsEndpoints = require('./posts/postsEndpoints.js');
const tagsEndpoints = require('./tags/tagsEndpoints.js');
const usersEndpoints = require('./users/usersEndpoints.js');

const server = express();

server.use(bodyParser.json());

server.use('/api/posts', postsEndpoints);
server.use('/api/tags', tagsEndpoints);
server.use('/api/users', usersEndpoints);

const port = 5000;

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
