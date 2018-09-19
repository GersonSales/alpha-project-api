"use strict";

const express = require("express");
const consign = require("consign");

const app = express();
consign()
  .include("config/config.js")
    .then("config/middleware.js")
    .then("src/router.js")
    .then("config/boot.js")
    .into(app);

module.exports = app;