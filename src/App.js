import React from "react";
import ReactDOM from "react-dom";
// Components
import RouteComponent from "./RouteComponent";


import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import About from "./components/About";
import SimpleMap from "./components/Location";
import Reviews from "./components/Reviews";


// css

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <RouteComponent />
        <LandingPage />
        <hr></hr>
        <Menu />
        <hr></hr>
        <SimpleMap></SimpleMap>
        <hr></hr>
        <About className="about"></About>
        <hr></hr>
        <Reviews></Reviews>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));