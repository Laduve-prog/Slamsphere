'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        id: 1,
        name: 'Card 1',
        code: '1234 5678 9012 3456',
        ccv: '123',
        expirydate: '12/23',
      },
      {
        id: 2,
        name: 'Card 2',
        code: '9876 5432 1098 7654',
        ccv: '456',
        expirydate: '11/22',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {});
  }
};