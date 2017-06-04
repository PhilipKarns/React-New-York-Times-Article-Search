// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article schema
var Article = require("./models/Article");

// Create a new express app
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------


// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// MongoDB configuration (Change this URL to your own DB)
mongoose.connect("mongodb://heroku_ctl1fr5g:hqppg1nkikrqo0usimk26tr15n@ds163721.mlab.com:63721/heroku_ctl1fr5g");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------



// -------------------------------------------------

// Listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log("App running on port 3000!");
});
