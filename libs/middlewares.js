const bodyParser = require("body-parser"),
  morgan = require("morgan"),
  logger = require("./logger.js");

module.exports = app => {
  app.set("port", 3000);
  app.set("json spaces", 4);
  app.use(morgan("common", {
    stream: {
      write: (message) => {
        logger.info(message)
      }
    }
  }));

  app.use(bodyParser());
};