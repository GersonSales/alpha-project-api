"use strict";
const repository = require("./repository");
const md5 = require("md5");

exports.post = async (req, res) => {
  try {
    const key = req.body.email + req.body.password + global.SALT_KEY;
    req.body.password = md5(key);
    await repository.create(req.body);
    res.status(201).send();
  } catch (error) {
    res.status(404).send({errorMessage: error.message })
  }
};

exports.getAll = async (req, res) => {
  try {
    const result = await repository.findAll();
    res.status(200).json({result: result})
  } catch (error) {
    res.status(500).send({errorMessage: error.message})
  }
};

exports.getById = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log("UserID: " + userId);
    const result = await repository.findById(userId);
    if (result) {
      res.status(202).json({result: result});
    }else {
      res.status(404).send(global.noUsersFound);
    }

  } catch (error) {
    res.status(500).send({errorMessage: error.message})
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