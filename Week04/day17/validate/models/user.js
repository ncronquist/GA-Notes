"use strict";
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    firstname:  {
                  type: DataTypes.STRING,
                  validate:   {
                                notEmpty: {msg: "First name cannot be blank"}
                              },
                  allowNull: false
                },
    lastname: {
                type: DataTypes.STRING,
                validate:   {
                              notEmpty: {msg: "Last name cannot be blank"}
                            },
                allowNull: false
              },
    email: {
              type: DataTypes.STRING,
              validate:   {
                            notEmpty: {msg: "Email cannot be blank"},
                            isEmail: {msg: "Email must be valid email"}
                          },
              allowNull: false
            },
    username: {
                type: DataTypes.STRING,
                validate:   {
                              notEmpty: {msg: "Username cannot be blank"}
                            },
                allowNull: false
              },
    password: {
                type: DataTypes.STRING,
                validate:   {
                              notEmpty: {msg: "Your name cannot be blank"},
                              is: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                            },
                allowNull: false
              },
    dob: DataTypes.DATE,
    profileimg: DataTypes.BLOB
  }, {
    hooks: {
      beforeCreate: function(comment) {
        console.log("comment:", comment);
        comment.comment = comment.comment[0].toLowerCase() + comment.comment.slice(1);
      }
    }
  }
    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
