"use strict";

const mongoose = require("mongoose");
const Dish = mongoose.model("Dish");

exports.findAll = async () => {
  return Dish.find({});
};