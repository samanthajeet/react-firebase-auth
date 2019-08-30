import React from "react";
import routes from "../constants/routes";
import { withRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

import {AppContainer} from '../../Style'

function App(props) {
  return (
    <AppContainer>
      <Navigation history={props.history} />

      {routes}
    </AppContainer>
  );
}

export default withRouter(App);