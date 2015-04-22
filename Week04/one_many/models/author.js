"use strict";
module.exports = function(sequelize, DataTypes) {
  var author = sequelize.define("author", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.author.hasMany(models.post);
      }
    }
  });
  return author;
};
