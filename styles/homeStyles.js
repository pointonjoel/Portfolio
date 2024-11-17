import styled from "styled-components";
// import backgroundImage from "../public/backgroundImage.webp";
import mainRender from "../public/mainRender.webp";
import css from "@styled-system/css";

export const ContainerDiv = styled.div(
  css({
    display: "flex",
    margin: "auto",
    width: ["90%", null, "70%"],
    textAlign: "center",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: ["32px", null, "64px"],
  })
);

export const Header = styled.p(
  css({
    textAlign: "center",
    fontWeight: "Medium",
    fontSize: ["35px", "40px", "50px"],
    padding: ["10px 10px", "40px 10px", "50px 10px"],
  })
);

export const ProfileCard = styled.div`
  width: 300px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.h2`
  font-size: 1.5em;
  margin: 10px 0 5px 0;
`;

export const Title = styled.p`
  font-size: 1em;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 20px;
`;
