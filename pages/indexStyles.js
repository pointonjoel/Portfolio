import styled from "styled-components";
import backgroundImage from "../public/mainImage.png";

export const Background = styled.div`
  height: 750px;
  /* width: 100%; */
  /* background-color: red; */
  background-image: url(${backgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  /* background-position: calc(50% + 150px) 50%; */
  /* margin-top: 3.2rem; */
`;
