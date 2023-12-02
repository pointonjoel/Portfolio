import styled from "styled-components";
import backgroundImage from "../public/backgroundImage.png";
import bioBackground from "../public/bioBackground.png";
import mainRender from "../public/mainRender.png";
import Image from "next/image";
import css from "@styled-system/css";

export const Body = styled.body(
  css({
    backgroundImage: `url(${backgroundImage.src})`,
    width: "100%",
    backgroundSize: "contain",
    backgroundRepeat: "repeat-y",
    backgroundPosition: "left center",
    backgroundSize: ["500px auto", "900px auto", "1000px auto"],
  })
);

export const Title = styled.div(
  css({
    width: "550px",
    height: "150px",
    px: "10px",
    width: "40%",
    minWidth: "200px",
    bg: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "thin",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    fontSize: "50px",
    lineHeight: "110%",
  })
);

export const TitleContainer = styled.div(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    backgroundImage: `url(${mainRender.src})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundSize: ["90% auto", "80% auto", "50% auto"],
    height: ["300px", "400px", "550px"],
  })
);

export const TypedText = styled.p`
  /* overflow: hidden; */
  /* white-space: nowrap; */
  width: 0;
  animation: typing 1.5s forwards;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: auto;
  width: 75%;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 25%;
  width: 25%;
  min-height: 200px;
  min-width: 200px;
  /* max-height: 300px;
  max-width: 300px; */
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: black;
  border-style: solid;
  border-width: thin;
  margin: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.div`
  height: 25%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Bio = styled.div`
  width: 65%;
  min-height: 250px;
  background-image: url(${bioBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  margin: auto;
  padding: 60px 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  font-family: "London", sans-serif;
  font-size: 25px;
`;

export const Header = styled.p`
  text-align: center;
  font-weight: Medium;
  font-size: 50px;
  padding: 50px 10px;
`;
