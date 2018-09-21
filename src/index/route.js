"use strict";

const express = new require("express");
const router = express.Router();

router.get("/", (req, res) => {
        res.status(200).json({response : "Welcome to the Alpha project"});
});

module.exports = router;