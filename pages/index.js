import Navbar from "../components/navbar/Navbar";
import { MainBackground, Background } from "./indexStyles";
import styled from "styled-components";

const Container = styled.div`
  /* margin-left: -150px; */
  position: absolute;
  width: 550px;
  height: 150px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background-color: white;
  border-color: black;
  border-style: solid;
  border-width: thin;
`;

const Title = styled.p`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 50px;
`;

function Main() {
  return (
    <section>
      <Navbar />
      <MainBackground>
        <Container>
          <Title>Lily Pointon</Title>
        </Container>
      </MainBackground>
      <Background></Background>
    </section>
  );
}

export default Main;
