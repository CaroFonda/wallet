# wallet
### Applied technologies

- **Front End:**

  - React
  - Redux
  - CSS

- **Back End:**
  - Node.js
  - Express
  - PostgreQL
  - Sequelize

# How to start the project: :rocket:

To run this project locally follow the next steps:

- Clone (or fork and clone) this repository
- Install [PostgreSQL](https://www.postgresql.org/)
- Run command prompt and enter `psql -U postgres` and enter the password you provided when installing PostgreSQL.
- Enter `CREATE DATABASE wallet;`
- Run `npm i` inside each folder: `/api` and `/client`
- Create a `.env` file inside `api` folder with the format provided bellow:

  - DB_HOST = ""
  - DB_USER = ""
  - DB_PASSWORD = ""
  - DB_PORT = ""
  - YourApiKeyToken = ""

- Run `npm start` inside `/api` and `/client`.
