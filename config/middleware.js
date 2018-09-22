"use strict";

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("../res/strings");
require("./../src/user/schema");

module.exports = async(app) => {
  try {
    app.set("port", 3000);
    app.use(bodyParser());
    await mongoose.connect(global.dbConnectionLink, {useNewUrlParser: true});
  } catch (error) {
    console.error(error);
  }
};