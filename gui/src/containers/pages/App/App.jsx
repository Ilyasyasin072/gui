import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import MainRouter from "../../../components/route/route";
import Apps from "../Layouts/layouts";

class App extends Component {
  render() {
    return (
      <Router>
        <Apps />
        <MainRouter />
      </Router>
    );
  }
}

export default App;
