module.exports = app => {
  app.db.sequelize.sync().done(() => {
    if (process.env.NODE_ENV !== "test") {
      app.listen(app.get('port'), () => {
        console.log(`Aplha Project is listen on ${app.get('port')}`);
      });
    }
  });
};