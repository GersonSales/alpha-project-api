const passport = require('passport'),
  passportJWT = require('passport-jwt');

const Strategy = passportJWT.Strategy,
  ExtractJwt = passportJWT.ExtractJwt;

module.exports = app => {
  const Users = app.db.models.Users;
  const config = app.libs.config;
  const params = {};

  const strategy = new Strategy();

  return {
    initialize: () => {},
    authenticate: () => {}
  }


};