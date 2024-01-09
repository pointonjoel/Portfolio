import styled from "styled-components";
import css from "@styled-system/css";
// import mainRender from "../public/mainRender.png";

export const PDFContainer = styled.div(
  css({
    display: "flex",
    margin: "0 auto",
    width: ["90%", null, "70%"],
    height: ["300px", "400px", "550px"],
  })
);

export const Container = styled.div(
  css({
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    margin: "0 auto",
  })
);

export const TitleContainer = styled.div(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: [null, `url(${mainRender.src})`],
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundSize: ["28% auto", "32% auto", "29% auto"],
    height: ["300px", "400px", "500px"],
    // margin: "auto",
  })
);

export const Title = styled.div(
  css({
    height: ["70px", "90px", "110px"],
    px: "10px",
    width: ["50%", "45%", "40%", "35%"],
    minWidth: "200px",
    bg: "white",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: "thin",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: ["25px", "35px", "45px", "50px"],
  })
);
