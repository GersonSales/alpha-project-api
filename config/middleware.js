"use strict";

const bodyParser = require("body-parser");
const dotenv = require("dotenv");

require("./../src/user/schema");
require("./../src/dish/schema");

module.exports = (app) => {
  app.use(bodyParser());
  dotenv.load();
};