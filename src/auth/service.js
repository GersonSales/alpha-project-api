"use strict";

const jwt = require("jsonwebtoken");


exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALT_KEY, {expiresIn: global.oneHour});
};

exports.decodeToken = async (token) => {
  return await jwt.verify(token, global.SALT_KEY);
};


exports.audit = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers[global.accessTokenHeader];
  if (token) {
    try {
      const data = await (this.decodeToken(token));
      if (data) {
        next();
      } else {
        res.status(401).send(global.notAuthorized);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(401).send(global.notAuthorized);
  }
};