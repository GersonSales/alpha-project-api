"use strict";
const repository = require("./repository");
const auth = require("./../auth/service");

exports.post = async (req, res) => {
  try {
    req.body.password = auth.encrypt(req.body.password);
    console.log("UserPassword: " + req.body.password);


    await repository.create(req.body);
    res.status(201).send(global.newUserIsCreated);
  } catch (error) {
    res.status(404).send({errorMessage: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await repository.findAll();
    res.status(200).json({result});
  } catch (error) {
    res.status(500).send({errorMessage: error.message});
  }
};

exports.getById = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await repository.findById(userId);
    if (result) {
      res.status(202).json({result});
    }else {
      res.status(404).send(global.noUsersFound);
    }

  } catch (error) {
    res.status(500).send({errorMessage: error.message});
  }
};

exports.put = async (req, res) => {
  try {
    const userId = req.params.id;
    await repository.findByIdAndUpdate(userId, req.body);
    res.status(202).send(global.successfulUpdated );
  } catch (error) {
    res.status(500).send({errorMessage: error.message});
  }

};

exports.delete = async (req, res) => {
  try {
    const userId = req.params.id;
    await repository.deleteById(userId);
    res.status(202).send({response: "Successful deleted."});
  } catch (error) {
    res.status(500).send({errorMessage: error.message});
  }

};