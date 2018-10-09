"use strict";

const mongoose = require("mongoose");
const Dish = mongoose.model("Dish");

exports.find = async (data) => {
  return Dish.find(data);
};

exports.create = async (data) => {
  const dish = new Dish(data);
  await dish.save();
};

exports.deleteById = async (id) => {
  await Dish.findOneAndDelete(id);
};

exports.findById = async (id) => {
  await Dish.findById(id);
};

exports.findByIdAndUpdate = async (id, data) => {
  await Dish.findOneAndUpdate(id, {$set: data});
};
