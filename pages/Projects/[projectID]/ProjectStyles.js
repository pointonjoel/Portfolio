import styled from "styled-components";
import css from "@styled-system/css";

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : "white"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  border: 2px solid ${(props) => props.theme.colors.primary};

  font-size: 1em;
  font-weight: bold;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
  }

  &:active {
    transform: scale(0.92);
  }
`;
