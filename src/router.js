"use strict";
const index  = require("./index/route.js");
const user  = require("./user/route.js");
const menu  = require("./menu/route.js");
const service  = require("./service/route.js");

module.exports = (app) => {
    app.use("/", index);
    app.use("/users", user);
    app.use("/menus", menu);
    app.use("/services", service);
};

