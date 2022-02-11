 1. Clone the repo
* https://github.com/brandonvicc/hipcamp-clone.git

 2. Install the dependencies from the root directory
* `npm install`

 3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL
* `CREATE USER <name> WITH CREATEDB PASSWORD <'password'>`

 4. Create an .env file in the banckend directory based on the .env.example found within the respective directory.
 
 5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your desired PORT (preferable 5000).
 
 6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
 * `"proxy":"http://localhost:5000"`
 
 7. Create Database, Migrate, and Seed models.
 * `npx dotenv sequelize db:create`
 * `npx dotenv sequelize db:migrate`
 * `npx dotenv sequelize db:seed:all`
 
 8. Start the service in the backend directory.
 * `npm start`
 
 9. Start the services in the frontend directory, which should open the project in your default browser. If not, navigate to http://localhost:3000 .
 * `npm start`

10. In the right corner of the navbar allows you to navigate to the login or signup form. You can either make an account or login with the Demo User and begin use iwannacamp.
