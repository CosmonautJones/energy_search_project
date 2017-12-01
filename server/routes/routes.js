module.exports = (app) => {
  //add your new routes here
  // TODO: import in all the user controllers
  const userControllers = require('../controllers/userControllers');

  app.route('/new-user')
  .post(userControllers.createUser);
  
  app.route('/login')
    .post(userControllers.login);
}