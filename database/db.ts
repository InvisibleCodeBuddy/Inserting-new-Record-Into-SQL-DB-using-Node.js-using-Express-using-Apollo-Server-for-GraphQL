import knex from "knex";

import configs from "./knexfile"

const db = knex(configs.development);

export default db;