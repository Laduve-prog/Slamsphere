const { Sequelize } = require("sequelize");
const { BDD } = require("../config.js");
const sequelize = new Sequelize(
  `postgres://${BDD.user}:${BDD.password}@${BDD.host}/${BDD.bdname}`,
  {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: true,
      native: true,
    },
    define: {
      timestamps: false,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, Sequelize);
db.cards = require("./card")(sequelize, Sequelize);
db.products = require("./product")(sequelize, Sequelize);

db.cards.belongsTo(db.users);

module.exports = db;