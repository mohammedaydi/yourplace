import React from "react";
import { useState } from "react";

import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
const MainNavigation = (props) => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const openDrawer = () => {
    setToggleDrawer(true);
  };
  const closeDrawer = () => {
    setToggleDrawer(false);
  };

  return (
    <React.Fragment>
      {toggleDrawer && <Backdrop onClick={closeDrawer} />}
      {toggleDrawer && (
        <SideDrawer show={toggleDrawer} onClick={closeDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
