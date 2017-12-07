// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/energyPlans.sqlite3'
},
        useNullAsDefault: true,
        migrations: {
            tableName: 'dbmigrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'energy_db',
      user:     'travis',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
        database: 'energyPlansdb',
        user: 'travis',
        password: 'pass',
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'dbmigrations',
    },
    seeds: {
        directory: './database/seeds',
    },
},
};
