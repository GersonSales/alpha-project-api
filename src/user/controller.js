"use strict";
const repository = require("./repository");

exports.post = async (req, res) => {
  try {
    await repository.create(req.data);
    res.status(201).json({message: "User successful created."})
  } catch (error) {
    res.status(404).send({errorMessage: error.message + "here"})
  }
};

exports.get = async (req, res) => {
  try {
    const result = await repository.findAll();
    res.status(200).json({result : result})
  }catch (error) {
    res.status(500).send({errorMessage: error.message})
  }
};

exports.put = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await repository.findById(userId);
    res.status(200).json({result : result});
  }catch (error) {
    res.status(500).send({errorMessage: error.message});
  }

};

exports.delete = async (req, res) => {
  try {
    const userId = req.params.id;
    await repository.deleteById(userId);
    res.status(201).send({response: "Successful deleted."})

  }catch (error) {
    res.status(500).send({errorMessage: error.message});
  }

};