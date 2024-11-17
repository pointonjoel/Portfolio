import styled, { keyframes, css as styledCss } from "styled-components";
import { css } from "@styled-system/css";
import useScrollAnimation from "../utils/useScrollAnimation";

export const MainContainer = styled.div(
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

// Define keyframe animations
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutToRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const LeftSection = styled.div`
  ${css({
    width: ["100%", null, "50%"], // Full width on small screens, 50% on larger screens
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", "flex-end"], // Centered on small screens
    paddingRight: [0, "40px"], // Remove padding on small screens
    paddingBottom: ["30px", 0], // Optional padding on small screens
    paddingTop: ["40px", 0],
  })}

  animation: ${(props) =>
    props.isAnimating
      ? styledCss`
          ${slideInFromLeft} 1s ease-out
        `
      : props.isExiting
      ? styledCss`
          ${slideOutToLeft} 1s ease-out
        `
      : "none"};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

export const LeftSectionWithScroll = (props) => {
  const { isVisible, isAnimating, isExiting } = useScrollAnimation(); // Use the custom hook

  return (
    <LeftSection
      {...props}
      isVisible={isVisible}
      isAnimating={isAnimating}
      isExiting={isExiting}
    />
  );
};

// Right section with combined styles and animation logic
export const RightSection = styled.div`
  ${css({
    width: ["100%", null, "50%"], // Full width on small screens, 50% on larger screens
    padding: ["10px", "20px", "40px"], // Adjust padding for smaller screens
    display: "flex",
    flexDirection: "column",
    justifyContent: ["left", "center"],
  })}

  animation: ${(props) =>
    props.isAnimating
      ? styledCss`
          ${slideInFromRight} 1s ease-out
        `
      : props.isExiting
      ? styledCss`
          ${slideOutToRight} 1s ease-out
        `
      : "none"};
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

export const RightSectionWithScroll = (props) => {
  const { isVisible, isAnimating, isExiting } = useScrollAnimation(); // Use the custom hook
  console.log("heree", isVisible, isAnimating, isExiting);

  return (
    <RightSection
      {...props}
      isVisible={isVisible}
      isAnimating={isAnimating}
      isExiting={isExiting}
    />
  );
};

export const Wrapper = styled.div`
  position: relative;
  overflow-x: hidden;
`;

export const BackgroundDiv = styled.div(
  css({
    width: ["3%", null, "40%"],
    height: "100%",
    backgroundColor: (props) => props.colors.primary,
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "-1",
  })
);

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

export const BioCard = styled.div(
  css({
    width: ["100%", null, "80%"],
    textAlign: ["center", "left"],
    borderRadius: "2px",
    padding: ["0px", "20px"],
  })
);

export const Description = styled.p`
  font-size: ${(props) => (props.light ? "1.1em" : "1.2em")};
  line-height: 1.5;
  margin: 20px 0;
  font-weight: ${(props) => (props.light ? 300 : 400)};
`;

export const ButtonContainer = styled.div(
  css({
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    justifyContent: ["center", "left"],
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
