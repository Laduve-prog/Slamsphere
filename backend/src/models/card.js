module.exports = (sequelize, DataTypes) => {
    const Cards = sequelize.define("cards", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ccv: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expirydate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Cards;
  };