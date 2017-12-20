module.exports = (app) => {
  const userControllers = require('../controllers/userController');
  const plansController = require('../controllers/plansController');

  // app.route('/enerTreeUsers')
  // .get(userControllers.getUsers);

  app.route('/new-user')
  .post(userControllers.createUser);
  
  app.route('/login')
  .post(userControllers.login);

  app.route('/plansData')
  .get(plansController.getPlans);

}