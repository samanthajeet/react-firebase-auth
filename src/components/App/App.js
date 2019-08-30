import React from "react";
import routes from "../constants/routes";
import { withRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "../../App.css";


function App(props) {
  return (
    <div>
      <h1>Sam's Super Sweet App</h1>
      <Navigation history={props.history} />
      {routes}
    </div>
  );
}

export default withRouter(App);