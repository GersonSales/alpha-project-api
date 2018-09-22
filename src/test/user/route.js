const request = global.request;
const app = global.app;

describe("Route: User", () => {
  beforeEach((done) => {
    repository.deleteAll();
  });
});

describe("POST /user", () => {
  describe("status 201", () => {
    it("Create a new User", (done) => {
      request
        .post("/user")
        .send({
          firstName: "User",
          lastName: "Name",
          email: "user66@email.com",
          phone: "(99)99999-9999",
          password: "userPassword"
        })
        .expect(201)
        .end((error, res) => {
          done(error);
        });
    });
  });
});