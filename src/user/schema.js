"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName :{
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "CLIENT"],
    default: "CLIENT"
  }
});

module.exports = mongoose.model("User", schema);