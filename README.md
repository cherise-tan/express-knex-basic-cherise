# express-knex-basic

teaching material

## Personal Learning
* Learnt how to fork and clone a git repository
* Introduction to yarn (package manager allowing easy download of dependencies)
* Introduction to SQLite + DB Browser
* Introduction to Handlebars (for templating)
* Introduction to Knex.js (for SQL Queries)

## Instructions

Steps

1. Install yarn if you haven't got it already https://yarnpkg.com/en/ it's a package manager so you can easily download dependencies
2. navigate to the projects directory and type 'yarn' into the terminal (this installs all of the packages)
3. type the following

```
yarn knex migrate:latest
```

4. Now that you've run the database migrations, you can seed the database with dummy data
5. type the following

```
yarn knex seed:run
```

6. now the database is populated. You can view the data using db sqlite browser (https://sqlitebrowser.org/) and opening up the 'dev.sqlite3' file in your project folder.

7. type "yarn start" to run the server and navigate to localhost:3000 in your web browser. "yarn dev" can be used in development mode so it hot reloads.
8. You should now see various medicines on the home page
9. New medicines can be added

### New features

It's a good idea to practice CRUD actions (create read update delete) with databases. Code some pages and functions + routes so that users can delete an item, return a specific item and update existing items. I've written these in order of complexity.

### Resources

complicated knex docs - https://knexjs.org/

awesome cheat sheet for knex (way better than the above docs) - https://devhints.io/knex

basic express routing - https://expressjs.com/en/starter/basic-routing.html

CRUD actions - https://www.linkedin.com/pulse/why-you-should-learn-crud-actions-leslie-alldridge/


