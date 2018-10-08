import React from "react";
import ReactDOM from "react-dom";
// Components
import RouteComponent from "./RouteComponent";



// css

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <RouteComponent />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));