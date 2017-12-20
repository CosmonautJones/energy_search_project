const sqlite = require('sqlite3');
const knex = require('../configuration/db.js');

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
  const {email, password} = req.body;
  knex
    .insert({ email, password })
    .into('users')
    .then((ids) => {
      res.status(201).json({ id: ids });
      console.log('user created!')
    })
    .catch((err) => {
      if(err.code === 'SQLITE_CONSTRAINT') {
        res.status(422).json({ error: 'input incorrect'})
    } else {
        res.status(500).json(err)
    }
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
  // getUsers,
};
