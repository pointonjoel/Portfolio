import styled from "styled-components";
import backgroundImage from "../public/backgroundImage.png";
import bioBackground from "../public/bioBackground.png";
import mainRender from "../public/mainRender.png";
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
    animation: "fadeIn 2.5s",
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

export const ContainerDiv = styled.div(
  css({
    display: "flex",
    margin: "auto",
    width: ["90%", null, "75%"],
    textAlign: "center",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "center",
    paddingBottom: ["32px", null, "64px"],
  })
);

export const Container = styled.div`
  width: 25%;
  height: 25%;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: black;
  border-style: solid;
  border-width: thin;
  margin: 15px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.div(
  css({
    // position: "relative",
    // height: ["100px", null, "170px"],
    // width: ["100px", null, "260px"],
  })
);

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
