// Include React
var React = require("react");

// Here we include all of the sub-components
// var Search = require("./children/Search");
// var Saved = require("./children/Saved");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({
	//setting a generic state associated with the search information
	getInitialState: function() {
		return {
			searchTopic: "",
			startYear: "",
			endYear: "",
			results: [],
			saved: []
		};
	},

  // The moment the page renders get the Saved Articles. This function calls the helper.js getSaved function.
  //The getSaved function then calls the api/saved API route in server.js
  //the componentDidMount function is then used to update the state, which means all current saved articles should display
  componentDidMount: function() {
  	console.log("component mounted");
    // Get the saved articles.
    helpers.getSaved().then(function(response) {
      console.log(response);
      if (response !== this.state.saved) {
        console.log("Saved", response.data);
        this.setState({ saved: response.data });
      }
    }.bind(this));
  },

  //if a search is entered, run this function
  //any time one of the state values changes we show it to the user with the componentDidUpdate function
  //we also want to make sure that, if the user refreshes the page, the information should still show what's currently in the DB
  //and not reset the values of our saved articles
  //we're accessing the previous state to see if the state changed. If it does we save it in the DB
  componentDidUpdate: function() {
  	if (prevState.topic !== this.state.topic || prevState.startYear !== this.state.startYear || prevState.endYear !== this.state.endYear) {
  		console.log("search criteria updated");

  		helpers.runQuery(this.state.topic, this.state.startYear, this.state.endYear).then(function(data) {
  		if (data !== this.state.results) {
  			console.log("Articles", data);
  			this.setState({results: data});  			
  		}//if
  		})//then
  	}//if

  },
  // This function allows childrens to update the parent.
  setTopic: function(topic) {
    this.setState({ searchTopic: topic });
  },
  render: function() {
  	return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">New York Times Article Search</h2>
            <p className="text-center">
              <em>Search for and annotate articles of interest.</em>
            </p>
          </div>

          <div className="col-md-12">
          	<div>
            	<Search setTopic={this.setTopic} startYear={this.startYear} endYear={this.endYear} />
            </div>
          </div>

          <div className="col-md-12">

            {/*<Results address={this.state.results} />*/}

          </div>

        </div>

        <div className="row">

          {/*<History history={this.state.history} />*/}

        </div>
      </div>  		
  	);//return
  }//render
});//main

// Export the component back for use in other files
module.exports = Main;