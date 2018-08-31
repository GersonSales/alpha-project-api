const logger = require("./logger.js");
module.exports = {
  database:"alpha-project",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "alpha_project.sqlite",
    logging: ((sql) => {
      logger.info(`[${new Date}] ${sql}`);
    })
  },
  jwtSecret: "4lph4_pr0j3ct",
  jwtSession: {session: false}
};