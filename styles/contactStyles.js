import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div(
  css({
    display: "flex",
    px: "10px",
    flexWrap: "wrap",
    width: ["90%", "75%", "60%"],
    minWidth: "200px",
    justifyContent: "center",
    // alignItems: "center",
    // textAlign: "centre",
    fontSize: "20px",
    margin: "0px auto 50px",
  })
);

export const FormContainer = styled.div`
  display: flex;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  padding: 3% 5% 5px;
  margin-top: 15px;
  /* width: "100%"; */
  /* align-items: centre; */
  /* height: 500px; */
`;

export const FormRow = styled.div(
  css({
    display: "flex",
    // marginBottom: "10px",
    // flex: 1,
    width: ["100%", "350px", "500px", "600px"],
    alignItems: "center",
    marginBottom: "5px",
    // marginLeft: "20%",
  })
);

export const HelperText = styled.p(
  css({
    // padding: ["1px", null, "2px"],
    color: "red",
    fontStyle: "italic",
    fontSize: "17px",
    textAlign: "right",
  })
);

export const Input = styled.input`
  border-radius: 20px;
  width: 100%;
  min-width: 50px;
  height: 30px;
  margin-left: 10px;
  padding-left: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.primary};
  font-size: 17px;

  &:focus {
    transition: all 0.1s ease-in-out;

    background: ${(props) => props.theme.colors.secondary};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 20px;
  width: 100%;
  height: 150px;
  margin-left: 10px;
  padding-left: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  background: ${(props) => props.theme.colors.primary};
  font-size: 17px;
  margin-top: 10px;

  &:focus {
    transition: color 0.1s ease-in-out;

    border: 2px solid ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.secondary};
    outline: none;
  }
`;

export const CentreContainer = styled.div(
  css({
    display: "flex",
    pt: "10px",
    justifyContent: "center",
  })
);
