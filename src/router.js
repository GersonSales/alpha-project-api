"use strict";
const index = require("./index/route");
const user = require("./user/route");
const menu = require("./menu/route");
const service = require("./service/route");
const auth = require("./auth/route");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./../config/swagger");

module.exports = (app) => {
  app.use("/", index);
  app.use("/user", user);
  app.use("/menu", menu);
  app.use("/service", service);
  app.use("/auth", auth);

  swaggerDocument.host = process.env.HOST;
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

