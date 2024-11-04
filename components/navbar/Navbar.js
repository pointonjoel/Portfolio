import React, { useState } from "react";
import Link from "next/link";
import { Nav, NavLink, NavMenu, Hamburger, Cross } from "./NavbarStyles";
import { useRouter } from "next/router";

const CustomLink = ({ to, name, hamburger, setHamburgerOpen }) => {
  const router = useRouter();

  const handleClick = (event) => {
    // Check if the link is targeting an anchor
    if (to.startsWith("/#")) {
      event.preventDefault(); // Prevent default link behavior

      const targetId = to.split("#")[1]; // Extract the ID from the link

      if (router.pathname === "/") {
        // If already on the homepage, scroll to the element
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to the homepage and then scroll
        router.push("/").then(() => {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    } else {
      // If it's not an anchor link, use the Next.js router
      router.push(to);
    }

    // Close the hamburger menu
    setHamburgerOpen(false);
  };

  return (
    <Link href={to} passHref legacyBehavior>
      <NavLink
        className={router.pathname === to ? "active" : ""}
        $hamburger={hamburger}
        onClick={handleClick} // Use the custom handleClick function
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
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/about"
            name="About"
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/contact"
            name="Contact"
            hamburger={hamburgerOpen}
            setHamburgerOpen={setHamburgerOpen}
          />
          <CustomLink
            to="/#projects"
            name="Projects"
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
