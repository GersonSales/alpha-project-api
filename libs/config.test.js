module.exports = {
  database:"alpha-project",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "alpha_project.sqlite",
    logging: false,
    define: {
      underscored: false
    }
  },
  jwtSecret: "4lph4_pr0j3ct",
  jwtSession: {session: false}
};