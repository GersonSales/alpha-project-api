"use strict";

const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
        res.status(200).json({response : "Welcome to the Alpha Project"});
});

module.exports = router;