const jwt = require("jwt-simple");
const authTag = "Authorization";

describe("Routes: Users", () => {
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;

  beforeEach((done) => {
    Users
      .destroy({where: {}})
      .then(() => {
        Users
          .create({
            name: "Test User",
            email: "user@email.com",
            password: "userPassword"
          })
          .then((user) => {
            token = jwt.encode({id: user.id}, jwtSecret);
            done();
          });
      })
      .catch((error) => done(error));
  });
  describe("POST /users", () => {
    describe("status 200", () => {
      it("creates a new user", (done) => {
        request
          .post("/users")
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

  describe("GET /user", () => {
    describe("status 200", () => {
      it("returns a authenticated user", (done) => {
        request
          .get("/user")
          .set(authTag, `Bearer ${token}`)
          .expect(200)
          .end((error, res) => {
            expect(res.body.name).to.eql("Test User");
            expect(res.body.email).to.eql("user@email.com");
            expect(res.body.isAdmin).to.equal(false);
            done(error, res);
          });
      });
    });
  });

  describe("DELETE /user", () => {
    describe("status 202", () => {
      it("delete an authenticated user", (done) => {
        request
          .delete("/user")
          .set(authTag, `Bearer ${token}`)
          .expect(202)
          .end((error, res) => {
            done(error, res);
          });
      });
    });
  });

  describe("PUT /user", () => {
    describe("status 204", () => {
      it("update authenticated user info", (done) => {
        request
          .put("/user")
          .set(authTag, `Bearer ${token}`)
          .expect(204)
          .end((error, res) => {
            done(error, res);
          });
      });
    });
  });
});