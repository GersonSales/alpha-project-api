"use strict";

const md5 = require("md5");
const repository = require("./../user/repository");
const service = require("./service");

exports.authenticate = async (req, res) => {
  try {
    const email = req.body.email;
    const password = md5(email + req.body.password + global.SALT_KEY);

    const user = await repository.findOne({email: email, password: password});

    if (user) {
      const payload = {
        email: user.email,
        role: user.role
      };

      const token = await service.generateToken(payload);
      res.status(200).json({token: token});
    }else {
      res.status(401).send(global.notAuthorized);
    }
  }catch (error) {
    res.status(500).send({errorMessage: error.message});
  }
};