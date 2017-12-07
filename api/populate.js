const mongoose = require('mongoose');
const Plan = require('./PlanModel.js');
const plans = require('./MOCK_DATA.json');

mongoose.Promise = global.Promise;

const populate = () => {
  const populatePlans = () => {
    const allPlans = plans; 
    const promises = allPlans.map(p => new Plan(p).save());
    return Promise.all(promises);
  };

  return populatePlans()
    .then(() => {
      console.log('done');
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log('ERROR', err);
      throw new Error(err);
    });
  };
  
  populate();

  module.exports = { populate };