import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    return knex.schema.createTable('student',
        (table: Knex.TableBuilder) => {
            table.integer("rollno").primary().notNullable().unique();
            table.string("name").notNullable();
            table.string("email").notNullable();
        })
}


export async function down(knex: Knex): Promise<void> {
}
