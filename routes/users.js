module.exports = app => {
  const Users = app.db.models.Users;

  app.route('/user')
    .all(app.auth.authenticate())

    .put((req, res) => {
      console.log("PUT");
      res.sendStatus(204);
    })

    .get((req, res) => {
      console.log("GET");
      res.sendStatus(204);
    })

    .delete((req, res) => {
      console.log("DELETE");
      res.sendStatus(204);
    });

  app.post('/users', (req, res) => {
    Users.create(req.body)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
        res.status(412).json({errorMessage: error.message})
      });
  });
};