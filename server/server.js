const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CORS = require('cors');

const Plan = require('./PlanModel.js');
const User = require('./UserModel.js')

const server = express();

server.use(bodyParser.json());
server.use(CORS());

const corsOptions = {
	"origin": "*",
	"methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
	"preflightContinue": false,
	"optionsSuccessStatus": 204
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/energyPlanUsers', { useMongoClient: true });

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

const plans = [
	{
		id: 0,
		company: 'InfuseEnergy',
		planDetail: 'Fixed Rate',
		price: {
			'2000kWh': '$0.10',
			'1000kWh': '$0.35',
			'500kWh': '$0.07'
		},
		contract: 12,
		rating: 4.5
	},
	{
		id: 1,
		company: 'ValueEnergy',
		planDetail: 'Indexed',
		price: {
			'2000kWh': '$0.19',
			'1000kWh': '$0.17',
			'500kWh': '$0.10'
	},
		contract: 6,
		rating: 4
	},
	{
		id: 2,
		company: 'SolarCity',
		planDetail: 'Variable',
		price: {
			'2000kWh': 'Free',
			'1000kWh': 'Free',
			'500kWh': 'Free'
		},
		contract: 1000,
		rating: 5
	},
	{
		id: 3,
		company: 'InfuseEnergy',
		planDetail: 'Fixed Rate',
		price: {
			'2000kWh': '$0.10',
			'1000kWh': '$0.35',
			'500kWh': '$0.07'
		},
		contract: 12,
		rating: 4
	},
	{
		id: 4,
		company: 'Reliant',
		planDetail: 'Indexed',
		price: {
			'2000kWh': '$0.09',
			'1000kWh': '$0.07',
			'500kWh': '$0.10'
		},
		contract: 6,
		rating: 4
	},
	{
		id: 5,
		company: 'TXU',
		planDetail: 'Variable',
		price: {
			'2000kWh': '$0.09',
			'1000kWh': '$0.08',
			'500kWh': '$0.06'
		},
		contract: 36,
		rating: 4.5
	}
];

server.get('/plansData/', (req, res) => {
	Plan.find({}, (err, plans) => {
		if (err) {
			res
				.status(STATUS_SERVER_ERROR)
				.json({ 'There was an error getting plans' :err });
			return;
		}
		res.json(plans);
	});
});

server.get('/plans', (req, res) => {
	res.send(plans);
});

server.get('/plans/:id', (req, res) => {
	const plan = plans.filter(plan => plan.id.toString() === req.params.id)[0];
	res.send(plan);
});

server.post('/new-plans', (req, res) => {
	if (req.body.id !== undefined) plan.push(req.body);
	res.send(plans);
});

const routes = require('./routes/routes.js');
routes(server);

const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
