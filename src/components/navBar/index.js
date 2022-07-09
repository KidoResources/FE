import React from "react";
// import {ReactComponent as Logo} from './images/small.png'
// import Logo from './images/small.png'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  // LogoButton,
} from "./navBarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        {/* <LogoButton to='/'>
          <img src={'./images/small.png'} alt='Logo of KIDO Resources'/>
        </LogoButton>  */}
        <NavLink to="/" activeStyle> {/*Temp Fix - Logo of KIDO goes here */}
            KIDO RESOURCES
        </NavLink>
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
          {/* <NavLink to="/community" activeStyle>
            Community
          </NavLink> */}
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
