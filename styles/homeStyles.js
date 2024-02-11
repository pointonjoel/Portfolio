import styled from "styled-components";
import backgroundImage from "../public/backgroundImage.png";
// import bioBackground from "../public/bioBackground.png";
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
    // width: "550px",
    height: ["80px", "100px", "150px"],
    px: "10px",
    width: ["60%", null, "40%"],
    minWidth: "200px",
    bg: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "thin",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ["35px", "40px", "50px"],
    lineHeight: "110%",
    animation: "fadeIn 2.5s",
  })
);

export const TitleContainer = styled.div(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: [null, `url(${mainRender.src})`],
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundSize: ["28% auto", "32% auto", "30% auto"],
    height: ["300px", "400px", "550px"],
    // margin: "auto",
  })
);

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

export const Container = styled.div`
  width: 25%;
  max-width: 250px;
  min-width: 100px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: black;
  border-style: solid;
  border-width: thin;
  margin: 15px;
  object-fit: contain;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.p`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Bio = styled.div(
  css({
    fontFamily: "London, sans-serif",
    fontSize: ["17px", "20px", "25px"],
  })
);

export const Header = styled.p(
  css({
    textAlign: "center",
    fontWeight: "Medium",
    fontSize: ["35px", "40px", "50px"],
    padding: ["30px 10px", "40px 10px", "50px 10px"],
  })
);
