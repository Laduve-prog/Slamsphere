'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = require("../../../frontend/src/assets/mock/products.json");
    return queryInterface.bulkInsert("Products", products, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  }
};