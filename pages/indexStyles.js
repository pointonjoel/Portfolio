import styled from "styled-components";
import mainImage from "../public/mainImage.png";
import backgroundImage from "../public/backgroundImage.png";

export const MainBackground = styled.div`
  /* display: inline-block; */
  /* width: 100%; */
  height: 850px;
  background-image: url(${mainImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% auto;
`;

export const Background = styled.div`
  height: 850px;
  /* width: 100%; */
  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
