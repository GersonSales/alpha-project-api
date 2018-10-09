"use strict";

const repository = require("./../user/repository");
const service = require("./service");
const auth = require("./../auth/service");

exports.authenticate = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await repository.findOne({email});

    if (user) {
      const password = req.body.password;
      if (auth.isMatch(password, user.password)) {
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
      } else {
        res.status(401).send();
      }

    } else {
      res.status(404).send("User not found.");
    }

  } catch (error) {
    res.status(500).send({errorMessage: error.message});
  }


};