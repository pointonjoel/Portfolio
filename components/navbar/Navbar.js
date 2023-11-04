import React from "react";
import Link from "next/link";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarStyles";

function CustomLink({ to, name }) {
  return (
    <Link href={to} passHref legacyBehavior>
      <NavLink>{name}</NavLink>
    </Link>
  );
}

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <CustomLink to="/" name="Home" activeStyle />
          <CustomLink to="/About" name="About" activeStyle />
          <CustomLink to="/Contact" name="Contact" activeStyle />
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
