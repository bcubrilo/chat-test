"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        "Messages",
        "isEmojiMessage",
        {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        "Messages"
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Messages", "isEmojiMessage")
      ]);
    });
  }
};
