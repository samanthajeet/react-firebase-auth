import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "../Landing/Landing";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Home from "../Home/Home";
import Account from "../Account/Account";
import Admin from "../Admin/Admin";
import PasswordForget from "../PasswordForget/PasswordForgot";

export default (
  <Switch>
    {/* <Route pathname="/signup" component={SignUp} /> */}
    <Route pathname="/signin" component={SignIn} />
    <Route pathname="/" component={Landing} />
    {/* <Route pathname="/home" component={Home} />
    <Route pathname="/account" component={Account} />
    <Route pathname="/admin" component={Admin} />
    <Route pathname="/pw-forget" component={PasswordForget} /> */}
  </Switch>
);
