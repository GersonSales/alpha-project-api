module.exports = app => {
  app.db.sequelize.sync().done(() => {
    app.listen(app.get('port'), () => {
      console.log(`Aplha Project is listen on ${app.get('port')}`);
    });
  });
};