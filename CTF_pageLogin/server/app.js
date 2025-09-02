const app = require("./config/express");
const routes = require("./routes/routes");

app.use("/", routes);


module.exports = app;
