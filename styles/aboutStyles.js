import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 20px 15%;
  font-size: 20px;
  margin: auto;

  &:first-child {
    width: 150px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

export const ImageContainer = styled.div(
  css({
    display: ["none", null, "flex"],
    width: "30%",
    height: "30%",
    maxHeight: "300px",
    maxWidth: "300px",
    minHeight: "100px",
    minWidth: "100px",
    margin: "0px 20px 10px",
  })
);

export const MobileImageContainer = styled.div(
  css({
    display: ["flex", null, "none"],
    width: "40%",
    height: "40%",
    maxHeight: "200px",
    maxWidth: "200px",
    minHeight: "100px",
    minWidth: "100px",
    margin: "auto",
  })
);
