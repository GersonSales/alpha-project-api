const jwt = require("jwt-simple");

module.exports = (app) => {
  app.post("/login", (req, res) => {
    const email = req.body.email,
      password = req.body.password;

    if(email && password) {
      const config = app.libs.config;
      const Users = app.db.models.Users;

      Users.findOne({where: {email: email}})
        .then(user => {
          if (Users.isPassword(user.password, password)) {
            const payload = {id: user.id};
            res.json({
              token: jwt.encode(payload, config.jwtSecret)
            });
          }else {
            res.sendStatus(401);
          }
        })
        .catch((error) => {
          res.status(401).json({errorMessage: error.message});
        });
    } else {
      res.sendStatus(401);
    }

  });
};