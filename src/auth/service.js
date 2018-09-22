"use strict";

const jwt = require("jsonwebtoken");


exports.generateToken = async (data) => {
  return jwt.sign(data, global.SALT_KEY, {expiresIn: global.oneHour});
};

exports.decodeToken = async (token) => {
  return await jwt.verify(token, global.SALT_KEY);
};


exports.authenticate = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers[global.accessTokenHeader];
  if (token) {
    try {
      const data = await (this.decodeToken(token));
      if (data) {
        req.role = data.role;
        req.id = data.id;
        next();
      } else {
        res.status(401).send();
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  } else {
    res.status(401).send();
  }
};
exports.authorizeByRole = (req, res, next) => {
  const reqRole = req.role;
  if (reqRole) {
    if (reqRole === "ADMIN") {
      next();
    } else {
      res.status(403).send();
    }

  } else {
    res.status(400).send();
  }
};

exports.authorizeById = async (req, res, next) => {
  const userId = req.id;
  if (userId) {
    const reqId = req.params.id;
    if (userId === reqId) {
      next();
    } else {
      res.status(401).send();
    }
  } else {
    res.status(400).send();
  }

};

let getDataFromReq = async (req) => {
  const token = req.body.token || req.query.token || req.headers[global.accessTokenHeader];
  try {
    return await this.decodeToken(token);
  } catch (e) {
    console.log("ERROR: " + e);
    return error;
  }
};

