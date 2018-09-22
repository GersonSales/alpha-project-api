"use strict";
const index  = require("./index/route");
const user  = require("./user/route");
const menu  = require("./menu/route");
const service  = require("./service/route");
const auth  = require("./auth/route");

module.exports = (app) => {
    app.use("/", index);
    app.use("/user", user);
    app.use("/menu", menu);
    app.use("/service", service);
    app.use("/auth", auth);
};

