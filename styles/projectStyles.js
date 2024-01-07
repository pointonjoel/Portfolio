import styled from "styled-components";
import css from "@styled-system/css";

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    margin: "0 auto",
  })
);
