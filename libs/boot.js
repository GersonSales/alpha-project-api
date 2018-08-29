module.exports = app => {
  app.listen(app.get('port'), () => {
    console.log(`Aplha Project is listen on ${app.get('port')}`);
  });
};