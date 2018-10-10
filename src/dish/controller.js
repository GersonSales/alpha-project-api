"use strict";

const repository = require("./repository");

exports.get= async (req, res) => {
  try {
    const result = await repository.find(req.query);
    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

exports.edit = async (req, res) => {
  try {
    const dishId = req.params.id;
    await repository.findByIdAndUpdate(dishId, req.body);
    res.status(200).send();
  }catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

exports.create = async (req, res) => {
  try {
    await repository.create(req.body);
    res.status(201).send();
  } catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

exports.delete = async (req, res) => {
  try {
    const dishId = req.params.id;
    console.log(dishId);
    await repository.deleteById(dishId);
    res.status(202).send();
  } catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

exports.findById = async (req, res) => {
  try {
    const dishId = req.params.id;
    console.log(dishId);
    const result = await repository.findById(dishId);
    res.status(200).json({result});
  } catch (error) {
    res.status(500).json({errorMessage: error.message});
  }
};

