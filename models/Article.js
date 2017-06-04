//requiring mongoose and setting up schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Article schema and model
var Article = new Schema({
  title: {
    type: String
  },
  //THIS SHOULD SHOW THE DATE AND TIME. TRY DATE.NOW IF THIS DOESN'T WORK
  date: {
    type: Date
  },
  //NEED TO MAKE SURE THE TYPE IS CORRECT
  url: {
  	type: String
  }
});

//creating DB and exporting it with the model
var Nytreact = mongoose.model("nytreact", Article);
module.exports = Nytreact;