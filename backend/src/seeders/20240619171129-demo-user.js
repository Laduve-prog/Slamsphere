'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        pseudo: 'john_doe',
        lastname: 'Doe',
        firstname: 'John',
        email: 'john@example.com',
        address: '123 Main St',
        phone: '555-1234',
        city: 'Anytown',
        country: 'USA',
        postalCode: '12345',
        password: 'password123',
      },
      {
        pseudo: 'jane_doe',
        lastname: 'Doe',
        firstname: 'Jane',
        email: 'jane@example.com',
        address: '456 Elm St',
        phone: '555-5678',
        city: 'Othertown',
        country: 'USA',
        postalCode: '67890',
        password: 'password456',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
