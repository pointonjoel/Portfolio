import styled from "styled-components";
import css from "@styled-system/css";

// export const Button = styled.button`
//   background: ${(props) =>
//     props.primary ? props.theme.colors.primary : "white"};
//   color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
//   border: 2px solid ${(props) => props.theme.colors.primary};

//   font-size: 17px;
//   font-weight: bold;
//   padding: 1px 10px;
//   border-radius: 5px;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     color: #000000;

//     background: ${(props) =>
//       props.primary ? "white" : props.theme.colors.primary};
//     color: ${(props) => (props.primary ? props.theme.colors.primary : "white")};
//   }

//   &:active {
//     transform: scale(0.92);
//   }
// `;

export const Wrapper = styled.div`
  position: relative;
`;

export const BackgroundDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Content = styled.div(
  css({
    width: "100%", // Full width of the viewport
    height: [null, null, "100vh"], // Full height of the viewport
    padding: ["15px", null, "20px"],
    boxSizing: "border-box", // Ensure padding is included in total height and width
  })
);

export const Container = styled.div(
  css({
    display: "flex",
    flexDirection: ["column", "row"], // column on small screens, row on larger screens
    width: "100%",
    height: "100%",
  })
);

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  border: ${(props) => `2px solid ${props.theme.colors.primary}`};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

export const Title = styled.div(
  css({
    display: "flex",
    height: "150px",
    px: "10px",
    width: "100%",
    minWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "centre",
    fontSize: "50px",
  })
);

export const FilledContainer = styled.div`
  display: flex;
  /* border: 2px solid ${(props) => props.theme.colors.primary}; */
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  padding: 15px;
  margin: auto;
  text-align: center;
  width: 65%;
  max-width: 700px;
`;

export const Heading = styled.h1`
  font-size: 5em;
  font-weight: bold;
`;
