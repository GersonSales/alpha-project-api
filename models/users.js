const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {
  let Users = sequelize.define("Users", {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataType.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    password:{
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    isAdmin: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  Users.beforeCreate(user => {});
  Users.isPassword = (encodePassword, password) => {return true};
  Users.associate = (models) => {};
  return Users;
};