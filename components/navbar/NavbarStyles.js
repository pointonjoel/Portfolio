import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import css from "@styled-system/css";

import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  height: 50px;
  display: flex;
  justify-content: right;
  @media screen and (max-width: 500px) {
    padding: ${(props) => (props.$isOpen ? "0px" : "0.5rem 2vw")};
  }
`;

export const NavLink = styled.a`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  padding: ${(props) => (props.$hamburger ? "4% 5%" : "20px")};

  &.active {
    color: black;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: black;
  }

  @media screen and (max-width: 500px) {
    background: ${(props) => props.theme.colors.primary};
    color: "black";
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  display: none;
  color: white;
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
  color: white;
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
  justify-content: right;
  padding-right: 20px;
  width: 100%;
  z-index: 1;

  @media screen and (max-width: 500px) {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: ${(props) => (props.$isOpen ? "fixed" : "none")};
    padding-right: 0px;
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
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
