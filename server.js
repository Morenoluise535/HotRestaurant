// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = []
var waitlist = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/reservation", function(req, res) {
    return res.json(reservation);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });