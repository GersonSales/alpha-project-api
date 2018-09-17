"use strict";

const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.post);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;

