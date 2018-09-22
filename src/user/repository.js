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

exports.findByIdAndUpdate = async (id, data) => {
  await User.findOneAndUpdate(id, {$set: data});
};

exports.deleteById = async (id) => {
  await User.findOneAndDelete(id);
};

exports.findOne = async (data) => {
  return await User.findOne(data);
};

exports.deleteAll = async () => {
  await User.destroy({});
};

