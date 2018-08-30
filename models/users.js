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
  Users.beforeCreate(user => {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(user.password, salt);
  });
  Users.isPassword = (encodePassword, password) => {
    return bcrypt.compareSync(password, encodePassword);
  };

  Users.associate = (models) => {};
  return Users;
};