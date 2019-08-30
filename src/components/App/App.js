import React from "react";
import routes from "../constants/routes";
import Navigation from "../Navigation/Navigation";
import "../../App.css";


function App(props) {
  console.log(props)
  return (
    <div>
      <h1>Sam's Super Sweet App</h1>
      <Navigation />
      {routes}
    </div>
  );
}

export default App;