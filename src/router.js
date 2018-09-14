"use strict";
const index  = require("./index/route");
const user  = require("./user/route");
const menu  = require("./menu/route");
const service  = require("./service/route");

module.exports = (app) => {
    app.use("/", index);
    app.use("/users", user);
    app.use("/menus", menu);
    app.use("/services", service);
};

