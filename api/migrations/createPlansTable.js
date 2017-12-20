
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plans', function(tbl) {
    tbl.increments('planId'); // primary key
    tbl.integer('id').notNullable();
    tbl.string('company', 128).notNullable();
    tbl.decimal('500', 5,2);
    tbl.decimal('1000', 5,2);
    tbl.decimal('2000', 5,2);
    tbl.string('state', 2).notNullable();
    tbl.string('zip_code', 12).notNullable();
    tbl.boolean('contract').notNullable();
    tbl.integer('rating');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('plans');
};
