"use strict";

const mongoose = require("mongoose");
const User = mongoose.model("User");

exports.create = async (data) => {
  const user = new User(data);
  await user.save();
};

exports.findAll = async () => {
  return await User.find({});
};

exports.findById = async (id) => {
  return await User.findById(id);
};

exports.deleteById = async (id) => {
  console.log("deleting user " + id);
};

