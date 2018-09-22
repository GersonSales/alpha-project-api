"use strict";

module.exports = (app) => {
    const port = app.get("port");
    app.listen(port, () => {
        console.log("Api project is listening on port " +  port);
    });
};