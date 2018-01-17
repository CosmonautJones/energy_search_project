const User = require('../models/UserModel.js');

const getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(err) {
      res.status(422);
      res.json({ err: 'there was an error getting users information' });
      return;
    }
    res.json(users);
    console.log('got them USERS!')
  });
};

const createUser = (req, res) => {
  const {username, password} = req.body;
  const newUser = {username, password};
  const user = new User(newUser)
  user.save((err, createdUser) => {
    if (err) {
      res.status(422);
      res.send({'Error inserting into users: ': err.message});
      return;
    }
    res.json(createdUser);
  });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const userToLogin = { username, password };
  User.findOne(userToLogin, (err, user) => {
    if (err) {
      res.status(422);
      res.send({'Error user not in db: ': err.message});
      return;
    }
    res.json(user);
  });
};

module.exports = {
  createUser,
  login,
  getUsers,
};
