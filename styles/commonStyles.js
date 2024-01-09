import styled from "styled-components";
import css from "@styled-system/css";

export const Button = styled.button`
  background: ${(props) =>
    props.primary ? props.theme.colors.primary : "white"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  border: 2px solid ${(props) => props.theme.colors.primary};

  font-size: 17px;
  font-weight: bold;
  padding: 1px 10px;
  border-radius: 5px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;

    background: ${(props) =>
      props.primary ? "white" : props.theme.colors.primary};
    color: ${(props) => (props.primary ? props.theme.colors.primary : "white")};
  }

  &:active {
    transform: scale(0.92);
  }
`;

export const Title = styled.div(
  css({
    display: "flex",
    height: "150px",
    px: "10px",
    width: "100%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    fontSize: "50px",
  })
);

export const FilledContainer = styled.div`
  display: flex;
  /* border: 2px solid ${(props) => props.theme.colors.primary}; */
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  padding: 15px;
  margin: auto;
  text-align: center;
  width: 65%;
  max-width: 700px;
`;
