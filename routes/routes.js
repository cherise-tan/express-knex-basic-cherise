// jshint esversion:6

const express = require("express"); //use the express package as there's no point manually coding up a server when that code already exists

const db = require("../db"); // require the db.js file so we can call functions from it

const router = express.Router(); // create an express router

router.get("/", (req, res) => {
  db.getDrugs() // go to the database and get us the data
    .then(drugs => {
      res.render("index", { drugs: drugs }); // render the simple html based index.hbs page and inject the data into it (the drugs from the database!)
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message); // something broke!
    });
});

router.get("/add", (req, res) => {
  // user goes to the /add url
  res.render("add"); // show them the add page
});

router.post("/save", (req, res) => {
  // user did a POST request to save an item (like posting mail in the mailbox!)
  db.saveDrug(req.body) // save their new drug to the database
    .then(drugs => {
      res.redirect("/"); // take them back to the homepage and display all drugs
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message); // something blew up
    });
});

router.get("/delete", (req, res) => {
  // user goes to the /delete url
  db.getDrugs() // go to the database and get us the data
    .then(drugs => {
      res.render("delete", { drugs: drugs }); // render the delete.hbs page
    })
    .catch(err => {
      res.status(500).send("DATABASE ERROR: " + err.message); // something broke!
    });
});

router.post("/delete", (req, res) => {
  db.deleteDrug(req.body.name) // delete the drug from the DATABASE
  .then(drugs => {
    res.redirect("/"); //take them back to the home page and display all drugs
  })
  .catch(err => {
    res.status(500).send("DATABASE ERROR: " + err.message); //something didn't work
  });
});


module.exports = router; // export the router so we can use it elsewhere if needed
