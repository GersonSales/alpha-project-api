const  fs = require("fs"),
  path = require("path"),
  Sequelize = require("sequelize");

let db = null;

module.exports = (app) => {
  if (!db) {
    const config = app.libs.config;
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    );

    db = {
      sequelize,
      models : {}
    };

    const root = path.join(__dirname, "src");
    fs.readdirSync(root).forEach((dir) => {
      const modelDir = path.join(root, dir);
      fs.readdirSync(modelDir).forEach((file) => {
        if (file.includes("model")) {
          const model = sequelize.import(modelDir);
          db.models[model.name] = model;
        }
      });
    });

    Object.keys(db.models).forEach((key) => {
      if (db.models[key].hasOwnProperty("associate")) {
        db.models[key].associate(db.models);
      }
    });
  }
  return db;
};