'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('bands', [{
      name: 'Imagine Dragons',
      genre: 'Alternative/Indie',
      available_start_time: new Date(),
      end_time: new Date()
    },
  {
    name: 'Pro Era',
    genre: 'Hip-Hop',
    available_start_time: new Date(),
    end_time: new Date()
  },
]);
  },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
