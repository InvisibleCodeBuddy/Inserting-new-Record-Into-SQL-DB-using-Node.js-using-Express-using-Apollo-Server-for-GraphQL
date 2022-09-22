import { Knex } from 'knex';
import path from 'path';
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

interface IKnexConfig {
    [key: string]: Knex.Config;
}

const configs: IKnexConfig = {
    development: {
        client: process.env.CLIENT,
        connection: {
            filename: './dev.mysql',
            database: process.env.DB,
            user: process.env.USER,
            password: process.env.PASSWORD
        },
        debug: true,
        useNullAsDefault: true,
        migrations: {
            tableName: 'knex_migrations',
        },
    }
};

export default configs;
