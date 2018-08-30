const bcrypt = require('bcrypt');

module.exports = (sequelize, DataType) => {
  let Users = sequelize.define("Users", {
    id: {},
    name: {},
    email: {},
    password:{},
    isAdmin: {}
  });
  Users.beforeCreate(user => {});
  Users.isPassword = (encodePassword, password) => {return true};
  Users.associate = (models) => {};
  return Users;
};