const sqlite = require('sqlite3');
const knex = require('../configuration/db.js');

const getPlans = (req, res) => {
  Plan.find({}, (err, plans) => {
    if (err) {
      res.status(422);
      res.json({ err: 'There was an error finding the energy plans'});
      return;
    }
    res.json(plans);
    console.log('Plans have been retrieved');
  });
};


module.exports = {
  getPlans,
}