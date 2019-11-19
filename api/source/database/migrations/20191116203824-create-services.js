'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('services', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      service: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false
      } ,
      created_at: {
        type : Sequelize.DATE,
        allowNull: true,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      }
    });
  },

  down: (queryInterface, Sequelize) => {   
    return queryInterface.dropTable('services');
  }
};
