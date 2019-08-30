import React from "react";
import { NavigationContainer, NavLink } from "../../Style";

const Navigation = props => {
  return (
    <NavigationContainer>
      <ul>
        <li>
          <NavLink onClick={() => props.history.push("/home")}>Home</NavLink>
        </li>
        <li>
          <NavLink onClick={() => props.history.push("/signin")}>
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => props.history.push("/")}>Landing</NavLink>
        </li>
        <li>
          <NavLink onClick={() => props.history.push("/account")}>
            Account
          </NavLink>
        </li>
        <li>
          <NavLink onClick={() => props.history.push("/admin")}>Admin</NavLink>
        </li>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
