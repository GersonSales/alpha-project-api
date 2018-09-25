"use strict";

global.SALT_KEY = "temp-key";
require("../res/strings");


module.exports = (app) => {
  const env = process.env.NODE_ENV;
  switch (env) {
    case global.envTest :
      return require("./config.test");
    case global.envDevelopment:
      return require("./config.development");
     case global.envC3po:
      return require("./config.c3po");
    case global.production:
      return require("./config.production");
  }
};