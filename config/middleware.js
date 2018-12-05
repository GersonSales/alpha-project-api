"use strict";

const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

require("./../src/user/schema");
require("./../src/dish/schema");

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser());
  dotenv.load();
};