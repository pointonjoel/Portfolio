import React, { useState } from "react";
import Link from "next/link";
import { Nav, NavLink, NavMenu, Hamburger, Cross } from "./NavbarStyles";
import { useRouter } from "next/router";

const CustomLink = ({ to, name, scroll, hamburger, setHamburgerOpen }) => {
  const router = useRouter();
  return (
    <Link href={to} passHref legacyBehavior scroll={scroll}>
      <NavLink
        className={router.pathname == to ? "active" : ""}
        $hamburger={hamburger}
        onClick={() => setHamburgerOpen(false)}
      >
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
      <Nav $isOpen={hamburgerOpen}>
        <NavMenu $isOpen={hamburgerOpen}>
          <CustomLink
            to="/"
            name="Home"
            activeStyle
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/About"
            name="About"
            activeStyle
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/Contact"
            name="Contact"
            activeStyle
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/#projects"
            name="Projects"
            scroll={false}
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
        </NavMenu>
        {hamburgerOpen ? (
          <Cross onClick={toggleHamburger} strokeWidth={"30px"} />
        ) : (
          <Hamburger onClick={toggleHamburger} />
        )}
      </Nav>
    </>
  );
};

export default Navbar;
