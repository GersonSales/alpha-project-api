"use strict";

const md5 = require("md5");
const repository = require("./../user/repository");
const service = require("./service");

exports.authenticate = async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(email + req.body.password + global.SALT_KEY);

    const user = await repository.findOne({email, password});

    if (user) {
      const payload = {
        id: user._id,
        email: user.email,
        role: user.role
      };

      const token = await service.generateToken(payload);
      const result = {};
      const key = global.accessTokenHeader;
      result[key] = token;
      res.status(200).json(result);
    }else {
      res.status(401).send();
    }
  }catch (error) {
    res.status(500).send({errorMessage: error.message});
  }
};