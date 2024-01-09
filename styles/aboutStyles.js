import styled from "styled-components";
import css from "@styled-system/css";

export const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 20px 15%;
  // flexWrap: "wrap",
  // width: ["90%", "75%", "60%"],
  // minWidth: "200px",
  // justifyContent: "center",
  // alignItems: "center",
  // textAlign: "centre",
  font-size: 20px;
  margin: auto;
  // alignItems: "center",

  &:first-child {
    width: 150px;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 30%;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  min-width: 100px;
  margin: 0px 20px 10px;
`;

// export const ImageContainer = styled.div`
//   position: absolute;
//   width: 20%;
//   height: 29.1%;
//   /* float: right; */
//   /* max-height: 300px;
//   max-width: 300px;
//   min-height: 100px;
//   min-width: 100px; */
//   border-radius: 50%;
//   overflow: hidden;
// `;
