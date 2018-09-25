"use strict";

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

require("./../src/user/schema");

module.exports = async (app) => {
  try {
    let port = process.env.API_HOST;
    if (!port) {
      port = 3030;
    }
    app.set("port", port);

    app.use(bodyParser());
    await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});
  } catch (error) {
    console.error(error);
  }
};