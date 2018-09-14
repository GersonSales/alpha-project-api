"use strict";
const repository = require("./repository");

exports.post = async (req, res) => {
    try {
        await repository.create(req.data);
        res.status(201).json({message: "User successful created."})
    }catch (error) {
        res.status(404).send({errorMessage: error.message + "here"})
    }
};
