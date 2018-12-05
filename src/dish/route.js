"use strict";

const express = require("express");
const router = new express.Router();
const controller = require("./controller");
const auth = require("./../auth/service");
const authenticate = auth.authenticate;
const authorizeByRole = auth.authorizeByRole;

router.get("/", controller.get);
router.post("/", controller.create);
router.post("/", authenticate, authorizeByRole, controller.create);

router.put("/:id",  controller.edit);
router.delete("/:id", controller.delete);

module.exports = router;


