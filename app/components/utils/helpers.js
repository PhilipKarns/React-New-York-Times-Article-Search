// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var NYTAPI = "dc308e8b2622429c86c5873c86167e98";

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to search for articles.
  runQuery: function(searchTerm, beginDate, endDate) {

    console.log(searchTerm, beginDate, endDate);

//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=dc308e8b2622429c86c5873c86167e98&q=Orlando&begin_date=20170101&end_date=20170501

    // search for the term entered
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  NYTAPI + "&q=" + searchTerm + "&begin_date=" + beginDate + "0101" + "&end_date=" + endDate + "0101";
  
  var snippets = [];

    return axios.get(queryURL).then(function(response) {
      console.log(response);
      // If get get a result, return that result's formatted address property
      if (response.data.response.docs) {
        for (var i=0; i<5; i++) {
          console.log(response.data.response.docs[i].snippet);
          snippets.push(response.data.response.docs[i].snippet);
        };
        console.log(snippets);
        return snippets;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  }
};
//   },

//   // This function hits our own server to retrieve the record of saved results via the GET /api/saved route
//   getSaved: function() {
//     //MAKE SURE MY ROUTE MATCHES THIS
//     return axios.get("/api/saved");
//   },

//   // This function posts saved articles to our database.
//   postSaved: function(location) {
//     return axios.post("/api/saved", { location: location });
//   },

//   //deletes articles from the DB
//   deleteSaved: function() {
//     return axios.delete("/api/saved")
//   }
// };

// We export the API helper
module.exports = helpers;