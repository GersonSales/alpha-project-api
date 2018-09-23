"use strict";

const express = require("express");
const router = new express.Router();
const controller = require("./controller");
const auth = require("./../auth/service");
const authenticate = auth.authenticate;
const authorizeByRole = auth.authorizeByRole;
const authorizeById = auth.authorizeById;

router.post("/", controller.post);
router.get("/", authenticate, authorizeByRole, controller.getAll);

router.get("/:id", authenticate, controller.getById);
router.put("/:id", authenticate, authorizeById, controller.put);
router.delete("/:id", authenticate, authorizeById, controller.delete);

module.exports = router;

