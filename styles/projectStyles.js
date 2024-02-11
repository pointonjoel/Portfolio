import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    marginBottom: "60px",
  })
);

export const TitleContainer = styled.div(
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundSize: ["25% auto", "32% auto", "29% auto"],
    height: ["300px", "400px", "500px"],
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

export const Description = styled.div(
  css({
    fontFamily: "London, sans-serif",
    fontSize: ["17px", "20px", "25px"],
  })
);

export const ScrollContainer = styled.div(
  css({
    display: "flex",
    width: "100%",
    textAlign: "center",
    justifyContent: [null, null, "center"],
    overflow: "auto",
  })
);

export const ProjectsContainer = styled.div`
  padding: 20px;
  display: block;
  width: 100%;

  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const ProjectsHeading = styled.div(
  css({
    padding: "10px",
    textAlign: "center",
    fontSize: ["17px", "20px", "25px"],
  })
);
