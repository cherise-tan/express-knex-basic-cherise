// jshint esversion:6

const express = require("express"); // we need this package and the one below
const hbs = require("express-handlebars");

const drugRoutes = require("./routes/routes"); // import the routes file and name it drugRoutes (saving to a variable to keep code tidy)

const server = express();

// Middleware set up for handlebars, not important at this stage...

server.engine("hbs", hbs({ extname: "hbs" }));
server.set("view engine", "hbs");
server.use(express.urlencoded({ extended: true }));

// Routes

server.use("/", drugRoutes); // use drug routes on line 4 above for every request starting with /

module.exports = server;
