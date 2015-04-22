"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("poststags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      postId: {
        type: DataTypes.INTEGER
      },
      tagId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("poststags").done(done);
  }
};