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
          <CustomLink to="/" activeStyle>
            Home
          </CustomLink>
          <CustomLink to="/about" activeStyle>
            About
          </CustomLink>
          <CustomLink to="/contact" activeStyle>
            Contact
          </CustomLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
