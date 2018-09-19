"use strict";

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./../src/user/schema");

module.exports = async (app) => {
  try {
    app.set("port", 3000);
    app.use(bodyParser());
    await mongoose.connect("mongodb://root:alph4root@ds261302.mlab.com:61302/alpha_project_db", {useNewUrlParser: true});
  } catch (error) {
    console.log(error.message);
  }
};