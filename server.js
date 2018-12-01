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

  if (reservation.length < 5){
  app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var reservation = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    reservation.routeName = reservation.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(reservation);
  
    characters.push(reservation);
  
    res.json(reservation);
  });
  }

  else{
    app.post("/api/waitlist", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var waitlist = req.body;
      
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        waitlist.routeName = waitlist.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(waitlist);
      
        characters.push(waitlist);
      
        res.json(waitlist);
  });
  }


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });