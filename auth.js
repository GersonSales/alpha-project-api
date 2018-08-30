const passport = require("passport"),
  passportJWT = require("passport-jwt");

const Strategy = passportJWT.Strategy,
  ExtractJwt = passportJWT.ExtractJwt;

module.exports = app => {
  const Users = app.db.models.Users;
  const config = app.libs.config;
  const params = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken("jwt")
  };

  const strategy = new Strategy(params, (payload, done) => {
    Users
      .findById((payload.id))
      .then(user => {
        if(user) {
          return done(null, {
            id: user.id,
            email: user.email
          });
        }
          done(new Error("User not found"), null);
      })
      .catch(error => {
        done(error, null);
      })
  });

  passport.use(strategy);

  return {
    initialize: () => {
      return passport.initialize()
    },
    authenticate: () => {
      return passport.authenticate('jwt', config.jwtSession);
    }
  }


};