import Sequelize from "sequelize";
const db = new Sequelize("twitterdb", "root", null, {
  host: "localhost",
  dialect: "mysql",
});
export default db;
