// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//MAKE SURE MAIN IS CHANGED TO THE PARENT/MAIN COMPONENT NAME, IF NECESSARY
// Include the main Main Component
var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Main)
ReactDOM.render(<Main />, document.getElementById("app"));