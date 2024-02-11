import React, { useState } from "react";
import Link from "next/link";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarStyles";
import { useRouter } from "next/router";

const CustomLink = ({ to, name, scroll }) => {
  const router = useRouter();
  return (
    <Link href={to} passHref legacyBehavior scroll={scroll}>
      <NavLink className={router.pathname == to ? "active" : ""}>
        {name}
      </NavLink>
    </Link>
  );
};

const Navbar = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <Nav>
        <NavMenu isOpen={hamburgerOpen}>
          <CustomLink to="/" name="Home" activeStyle />
          <CustomLink to="/About" name="About" activeStyle />
          <CustomLink to="/Contact" name="Contact" activeStyle />
          <CustomLink to="/#projects" name="Projects" scroll={false} />
        </NavMenu>
        <Bars onClick={toggleHamburger} />
      </Nav>
    </>
  );
};

export default Navbar;
