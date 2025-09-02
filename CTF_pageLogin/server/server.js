const app = require("./app");
require("dotenv").config()

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, HOST, () => {
    console.clear()
    console.log(`oOo......... Framework Express 5.1.0 Online .........oOo\n`);
    console.log(`=> http://${HOST}:${PORT}`);
});