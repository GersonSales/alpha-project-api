"use strict";

const mongoose = require("mongoose");

module.exports = async (app) => {
  try {
    if (process.env.NODE_ENV !== "test") {
      await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
      const port = process.env.PORT;
      app.listen(port, () => {
        console.log("Aalpha Project is listening on port " + port);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
