"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./controller");
const auth = require("./../auth/service");

router.post("/", controller.post);
router.get("/", auth.audit, controller.getAll);
router.get("/:id", auth.audit, controller.getById);
router.put("/:id", auth.audit, controller.put);
router.delete("/:id", auth.audit, controller.delete);

module.exports = router;

