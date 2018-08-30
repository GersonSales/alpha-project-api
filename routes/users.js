module.exports = (app) => {
  const Users = app.db.models.Users;

  app.route("/user")
    .all(app.auth.authenticate())

    .put((req, res) => {
      Users
        .update(req.body, {where: {id: req.user.id}})
        .then(() => {
          res.sendStatus(204);
        })
        .catch((error) => {
          res.status(400).json({errorMessage: error.message});
        });
    })

    .get((req, res) => {
      Users
        .findById(req.user.id, {
          attributes: ["id", "name", "email"]
        })
        .then((result) => {
          res.json(result);
        })
        .catch((error) => {
          res.status(400).json({errorMessage: error.message});
        });
    })

    .delete((req, res) => {
      Users
        .destroy({where: {id: req.user.id}})
        .then((result) => {
          res.status(202).json(result);
        })
        .catch((error) => {
          res.status(400).json({errorMessage: error.message});
        });
    });

  app.post("/users", (req, res) => {
    Users
      .create(req.body)
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(412).json({errorMessage: error.message});
      });
  });
};