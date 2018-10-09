"use strict";

const repository = require("./repository");

exports.getAll = async (req, res) => {
  try {
    const result =  await repository.findAll();
    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

