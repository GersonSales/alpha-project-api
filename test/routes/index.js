const request = global.request;

describe("Routes: Index", () => {
  describe("GET /", () => {
    it("returns the API status", (done) => {
      request
        .get("/")
        .expect(200)
        .end((error, res) => {
          const expected = {response: "Welcome to the Alpha Project"};
          expect(res.body).to.eql(expected);
          done(error);
        });
    });
  });
});