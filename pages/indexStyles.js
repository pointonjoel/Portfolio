import styled from "styled-components";
import backgroundImage from "../public/backgroundImage.png";
import bioBackground from "../public/bioBackground.png";
import Image from "next/image";

export const Background = styled.div`
  height: 850px;
  /* width: 100%; */
  /* background-image: url(${backgroundImage.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; */
`;

export const MainRender = styled(Image)`
  display: block;
  padding-top: 30px;
  margin-left: auto;
  margin-right: auto;
  transform: translateX(+50%);
  /* width: 50%; */
  /* margin-left: -30px; */
`;

export const Body = styled.body`
  background-image: url(${backgroundImage.src});
  width: 100%;
  background-size: cover;
  background-repeat: repeat;
  background-position: center center;
  background-size: 100% auto;
`;

export const TitleContainer = styled.div`
  position: absolute;
  width: 550px;
  height: 150px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  border-color: black;
  border-style: solid;
  border-width: thin;
`;

export const Title = styled.p`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 50px;
`;

export const TypedText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  animation: typing 1.5s forwards;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  /* flex-direction: column; */
  margin: auto;
  width: 75%;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 25%;
  width: 25%;
  min-height: 200px;
  min-width: 200px;
  /* max-height: 300px;
  max-width: 300px; */
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: black;
  border-style: solid;
  border-width: thin;
  margin: 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectTitle = styled.div`
  height: 25%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  vertical-align: middle;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Bio = styled.div`
  width: 65%;
  min-height: 250px;
  background-image: url(${bioBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  margin: auto;
  padding: 60px 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
  font-family: "London", sans-serif;
  font-size: 25px;
`;

export const Header = styled.p`
  text-align: center;
  font-weight: Medium;
  font-size: 50px;
  padding: 50px 10px;
`;
