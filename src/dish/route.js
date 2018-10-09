"use strict";

const express = require("express");
const router = new express.Router();
const controller = require("./controller");
const auth = require("./../auth/service");

router.get("/", controller.get);
router.post("/", auth.authorizeByRole, controller.create);

router.put("/:id",  controller.edit);
router.delete("/:id", controller.delete);

module.exports = router;


