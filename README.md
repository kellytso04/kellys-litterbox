# Litterbox
**Litterbox** is the back-end API that supports our front-end capstone project, _Catwalk_. 

# Getting set up
This codebase requires a **GitHub API token**.
Within the codebase, locate the file `config.example.js`, make a copy of it titled `config.js`, and replace the placeholder text with your personal access token. That's it!

## The database
This repository uses **PostgreSQL**. If you have already have Postgres installed on your local machine, all you need to do is create a database through the terminal, navigate to `db/config.sample.js`, make a copy of it titled `config.js`, and replace the placeholder text with your database login information.

In `db/schema.sql`, you'll find the structure of all my tables and the `COPY` queries I used in my ETL process. If you have your database set up, you can run the command `npm run schema` in the terminal to save the raw CSV data in your database.
