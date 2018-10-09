"use strict";

const express = require("express");
const router = new express.Router();
const controller = require("./controller");

router.get("/", controller.getAll);

module.exports = router;


