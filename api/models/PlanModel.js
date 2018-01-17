const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/plansData', { useMongoClient: true });

const PlanSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  fixedRate: {
    type: Boolean,
    required: true,
  },
  price: {
    "2000kWh": Number,
    "1000kWh": Number,
    "500kWh": Number,
  },
  contract: Number,
  rating: Number,
});

module.exports = mongoose.model('Plan', PlanSchema);