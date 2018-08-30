module.exports = app => {
  const Users = app.db.models.Users;
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