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
    // px: "10px",
    width: "40%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    fontSize: "50px",
  })
);
