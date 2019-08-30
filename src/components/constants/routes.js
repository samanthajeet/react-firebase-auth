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
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/home" component={Home} />
    <Route path="/account" component={Account} />
    <Route path="/admin" component={Admin} />
    <Route path="/pw-forget" component={PasswordForget} />
    <Route path="/" exact component={Landing} />
  </Switch>
);
