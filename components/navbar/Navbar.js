import React from "react";
import Link from "next/link";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarStyles";
import { useRouter } from "next/router";

const CustomLink = ({ to, name }) => {
  const router = useRouter();
  console.log(router.pathname, to);
  return (
    <Link href={to} passHref legacyBehavior>
      <NavLink
        className={
          router.pathname == to && router.pathname != "/" ? "active" : ""
        }
      >
        {name}
      </NavLink>
    </Link>
  );
};

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
