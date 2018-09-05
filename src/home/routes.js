module.exports = (app) => {
    app.get("/", (req, res) => {
        res.status(200).json({response: "Welcome to the Alpha Project"});
    });
};