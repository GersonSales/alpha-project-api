"use strict";

const mongoose = require("mongoose");
const userSchema = require("./../src/user/schema");

module.exports = async (app) => {
  try {
    app.set("port", 3000);
    app.use(userSchema);

    await mongoose.connect("mongodb://root:alph4root@ds261302.mlab.com:61302/alpha_project_db", { useNewUrlParser: true } );
  } catch (error) {
    console.log(error.message);
  }
};

