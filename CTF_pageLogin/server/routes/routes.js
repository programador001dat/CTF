const express = require("express");
const Router = express.Router();
const Path = require("path");
const bodyParser = require("body-parser");


Router.use(bodyParser.urlencoded({extended: true}));
Router.use(express.static(Path.join(__dirname, "../public")));

Router.get("/", (request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
    response.sendFile(Path.join(__dirname, "../views", "logon.html"));
});
Router.post("/", (request, response) => {
    const {username, password} = request.body;
    if(username === "ILoveYou" && password === "ILoveYou")
    {
        response.send("<h1>Logado</h1>");
    }else{
        response.send("<h1>Não encontrado</h1>")
    }
});

Router.get("/robots.txt", (request, response) => {
   response.statusCode = 200;
   response.setHeader("Content-Type", "text/plain");
   res.sendFile(Path.join(__dirname, "../public", "robots.txt"));
});

module.exports = Router;
