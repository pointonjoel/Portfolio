import { FaBars } from "react-icons/fa";
// import themes from "../../styles/THEMES";
import styled from "styled-components";

export const Nav = styled.nav`
  background: ${(props) => props.theme.colors.primary};
  min-height: 50px;
  display: flex;
  justify-content: right;
  padding: 0.5rem 2vw;
  /* z-index: 10; */
`;

export const NavLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  /* background-color: black; */

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

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  /* width: 100%; */
  /* padding-left: auto; */

  @media screen and (max-width: 500px) {
    display: inline;
    /* position: absolute; */
    /* top: 0; */
    /* right: 0; */
    margin: 4px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    /* margin-top: 240px; */
    display: ${(props) => (props.isOpen ? "inline" : "none")};
    animation: fadeIn 0.5s;
    width: 50px;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

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
    color: #ffffff;
  }
`;
