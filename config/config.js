"use strict";

global.SALT_KEY = "temp-key";

module.exports = (app) => {
  const env = process.env.NODE_ENV;
  if(Boolean(env)) {
    return require(`./config.${env}`)
  }else {
    return require("./config.development")
  }
};