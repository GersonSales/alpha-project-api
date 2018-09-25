"use strict";

module.exports = (app) => {
  if (process.env.NODE_ENV !== "test") {
    const port = app.get("port");
    app.listen(port, () => {
      console.log("Api project hr is listening on port " + port);
    });
  }
}
;