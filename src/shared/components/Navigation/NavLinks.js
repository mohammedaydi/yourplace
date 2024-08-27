import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

import "./NavLinks.css";
import Button from "../FormElements/Button";
const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  var activeBB = false;
  const { pathname } = useLocation();

  var ss = pathname.split("/");
  ss[1] = parseInt(ss[1]);
  if (!isNaN(ss[1]) && typeof ss[1] === "number" && ss[2] === "places")
    activeBB = true;

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      <li>
        {auth.isLoggedIn && (
          <NavLink to="/places" id={activeBB && "bb"} end>
            MY PLACES
          </NavLink>
        )}
      </li>
      <li>
        {auth.isLoggedIn && <NavLink to="/places/new">ADD PLACE</NavLink>}
      </li>
      <li>{!auth.isLoggedIn && <NavLink to="/auth">AUTHENTICATE</NavLink>}</li>
      {auth.isLoggedIn && (
        <Button inverse onClick={auth.logout}>
          Logout
        </Button>
      )}
    </ul>
  );
};

export default NavLinks;
