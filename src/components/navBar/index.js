import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          {/* <NavLink to="/events" activeStyle>
            Events
          </NavLink> */}
          {/* <NavLink to="/annual" activeStyle>
            Annual Report
          </NavLink> */}
          <NavLink to="/Discover" activeStyle>
            Discover
          </NavLink>
          <NavLink to="/community" activeStyle>
            Community
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
