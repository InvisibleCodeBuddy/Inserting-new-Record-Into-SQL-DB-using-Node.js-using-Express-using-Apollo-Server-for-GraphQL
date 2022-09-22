### Setup
1. Create .env file containing below keys

    a) DB=student
    
    b) USER
    
    c) PASSWORD
    
    d) CLIENT=mysql
    
2. create a student database in mysql   
3. initialize Knex
    - run 20220922070223_create-student-table.ts migration file using "migrate:up 20220922070223_create-student-table.ts" command

####  Commands

# initialize Knex
-- npx knex init

#  to create new migration in database/migrations
-- npm run knex migrate:make create-student-table --migrations-directory ./database/migrations

# run latest migration
-- npm run knex migrate:latest

# or specify name of migration file
-- migrate:up 20220922070223_create-student-table.ts

# start a Apollo Server
-- nodemon -x ts-node apolloServer.ts

