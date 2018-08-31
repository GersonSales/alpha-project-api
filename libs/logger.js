const fs = require('fs'),
  winston = require('winston');

if (!fs.existsSync("logs")) {
  fs.mkdirSync("logs");
}

module.exports = winston.createLogger({
  transports: [
    new winston.transports.File({
      level: "info",
      filename: "logs/alpha-project.log",
      maxSize: 1048576,
      maxFiles: 10,
      colorize: true
    })
  ]
});

