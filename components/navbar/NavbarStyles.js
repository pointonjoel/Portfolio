import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import css from "@styled-system/css";

import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  height: 50px;
  display: flex;
  justify-content: right;
  padding: ${(props) => (props.isOpen ? "0px" : "0.5rem 2vw")};
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  padding: ${(props) => props.hamburger && "4% 5%"};

  &.active {
    color: #000000;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
  }

  @media screen and (max-width: 500px) {
    background: ${(props) => props.theme.colors.primary};
    color: "black";
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  display: none;
  color: #fff;
  z-index: 1;
  animation: fadeIn 0.5s;

  @media screen and (max-width: 500px) {
    display: inline;
    margin: 4px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Cross = styled(IoCloseSharp)`
  display: none;
  color: #fff;
  margin: 0.5rem 2vw 0px 0px;
  z-index: 1;
  animation: fadeIn 0.5s;

  @media screen and (max-width: 500px) {
    display: inline;
    /* margin: 4px; */
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 500px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: ${(props) => (props.isOpen ? "fixed" : "none")};

    animation: fadeIn 0.5s;
  }
`;

export const SideNav = styled.div`
  @media screen and (max-width: 500px) {
    display: block;
    position: fixed;
    width: 100%;
    animation: fadeIn 0.5s;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 4px;
  background: ${(props) => props.theme.colors.primary};
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000000;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
