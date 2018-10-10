"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name : {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ["DINNER", "LUNCH"],
    default: "DINNER"

  }
});

module.exports = mongoose.model("Dish", schema);

