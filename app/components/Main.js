// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
	//setting a generic state associated with the search information
	getInitialState: function() {
		return {
			topic: "",
			startYear: "",
			endYear: "",
			//results: "",
			//saved: ""
		};
	},

	  // The moment the page renders get the Saved Articles
  componentDidMount: function() {
    // Get the saved articles.
    helpers.getSaved().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("Saved", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  },

});//main