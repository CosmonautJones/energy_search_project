
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'myFirstEmail@hoorah.com', password: 'hookah1'},
        {id: 2, email: 'mySecondEmail@hoorah.com', password: 'hookah2'},
        {id: 3, email: 'myThirdEmail@hoorah.com', password: 'hookah3'}
      ]);
    });
};
