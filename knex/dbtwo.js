
import knex from 'knex'

const k=knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'q1w2e3r4',
    database: 'psybis'
    }
});
export default k