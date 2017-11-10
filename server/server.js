const express = require('express');
const bodyParser = require('body-parser');
const CORS = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(CORS());

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
		rating: 4
	},
	{
		id: 1,
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
		id: 2,
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

app.get('/plans', (req, res) => {
	res.send(plans);
});

app.get('/plans/:id', (req, res) => {
	const plan = plans.filter(plan => plan.id.toString() === req.params.id)[0];
	res.send(plan);
});

app.post('/new-plans', (req, res) => {
	if (req.body.id !== undefined) plan.push(req.body);
	res.send(plans);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
