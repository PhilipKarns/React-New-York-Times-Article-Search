var React = require("react");

//Create search component
var Search = React.createClass({
	getInitialState: function() {
		return {
			term: "",
			searchStartYear: "",
			searchEndYear: ""
		};
	},

	handleChange: function(event, event2, event3) {
		// this.setState({
		// 	term: event.target.value,
		// 	searchStartYear: event2.target.value,
		// 	searchEndYear: event3.target.value
		// });
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	handleSubmit: function(event) {
		event.preventDefault();

		//send the search terms to the parent
		this.props.setQuery(this.state.term, this.state.searchStartYear, this.state.searchEndYear);
		this.setState({term: "", searchStartYear: "", searchEndYear: ""});
	},

	render: function() {
		return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Query</h3>
        </div>
        <div className="panel-body text-center">
        	<form onSubmit={this.handleSubmit}>
        		<div className="form-group">
        			<h4>
        				<strong>Topic</strong>
        			</h4>

        			<input
		                value={this.state.term}
		                type="text"
		                className="form-control text-center"
		                id="term"
		                onChange={this.handleChange}        				
        			/>

        			<h4>
        				<strong>Start Year</strong>
        			</h4>

        			<input
		                value={this.state.searchStartYear}
		                type="number"
		                className="form-control text-center"
		                id="searchStartYear"
		                onChange={this.handleChange}        				
        			/>

        			<h4>
        				<strong>End Year</strong>
        			</h4>

        			<input
		                value={this.state.searchEndYear}
		                type="number"
		                className="form-control text-center"
		                id="searchEndYear"
		                onChange={this.handleChange}        				
        			/>

	                <br />
	                <button
	                  className="btn btn-primary"
	                   type="submit"
	                >
	                Submit
	                </button> 			

        		</div>
        	</form>
        </div>
      </div>			
		);//return
	}//render
});//search

module.exports = Search;