import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div(
  css({
    display: "flex",
    flexDirection: "column",
    justifyContent: ["top", null, "center"],
    alignItems: "center",
    minHeight: "90vh",
    margin: "10px",
  })
);

export const FormContainer = styled.div(
  css({
    width: ["100%", "70%", "50%"],
    textAlign: "center",
    backgroundColor: "#F6ECE0",
    borderRadius: "2px",
    padding: ["10px", null, "30px"],
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
  })
);

export const Heading = styled.h1(
  css({
    fontSize: ["4em", null, "5em"],
    fontWeight: "bold",
    textAlign: "center",
    padding: ["30px", null, "10px"],
  })
);

export const FormRow = styled.div(
  css({
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: "15px",
  })
);

export const HelperText = styled.p(
  css({
    color: "red",
    fontStyle: "italic",
    fontSize: "17px",
    textAlign: "right",
  })
);

export const Input = styled.input`
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.dark}`};
  width: 100%;
  height: 30px;
  margin-left: 10px;
  padding-left: 10px;
  background: transparent;
  font-size: 17px;
  color: black;

  &:focus {
    transition: all 0.1s ease-in-out;
    background: transparent;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border-bottom: ${(props) => `2px solid ${props.theme.colors.dark}`};
  width: 100%;
  height: 150px;
  margin-left: 10px;
  padding-left: 10px;
  background: transparent;
  font-size: 17px;
  color: black;
  margin-top: 0px;

  &:focus {
    transition: all 0.1s ease-in-out;
    background: transparent;
    outline: none;
  }
`;

export const CentreContainer = styled.div(
  css({
    display: "flex",
    padding: ["10px", null, "10px 0 0"],
    justifyContent: "center",
  })
);
