var React = require("react");

//Create search component
var Search = React.createClass({
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
        				<strong>Location</strong>
        			</h4>
        		</div>
        	</form>
        </div>
      </div>			
		)//return
	}//render
})//search