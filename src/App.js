import React from "react";
import ReactDOM from "react-dom";

import LandingPage from "./components/LandingPage";
import Menu from "./components/Menu";
import About from "./components/About";


// css
import './styles/first.sass';
import './styles/card.sass';
import './styles/hamburger.sass';

export default class App extends React.Component {
  render() {
    return(
      <div className="container">
        <LandingPage />
        <hr></hr>
        <Menu />
        <hr></hr>
        <About></About>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));