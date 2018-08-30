const jwt = require("jwt-simple");

describe("Routes: Users", () => {
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;

  beforeEach(done => {
    Users
      .destroy({where: {}})
      .then(() => {
        Users
          .create({
            name: "Test User",
            email: "user@email.com",
            password: "userPassword"
          })
          .then(user => {
            token = jwt.encode({id: user.id}, jwtSecret);
            done();
          })
      })
      .catch(error => done(error));
  });
  describe("POST /users", () => {
    describe("status 200", () => {
      it("creates a new user", done => {
        request.post('/users')
          .send({
            name: "Mary",
            email: "mary@email.com",
            password: "maryPassword"
          })
          .expect(200)
          .end((error, res) => {
            expect(res.body.name).to.eql("Mary");
            expect(res.body.email).to.eql("mary@email.com");
            expect(res.body.isAdmin).to.eql(false);
            done(error);
          });
      });
    });
  });
});