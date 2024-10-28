import {
  Body,
  Title,
  TitleContainer,
  ContainerDiv,
  Bio,
  Header,
} from "../styles/homeStyles";
import { PortfolioSection } from "../components/portfolioSection/portfolioSection";
import { FilledContainer } from "../styles/commonStyles";
import { TextStore } from "../components/text/TextStore";
import styled from "styled-components";

const OpeningSection = () => {
  return (
    <TitleContainer>
      <Title>{TextStore.home.title}</Title>
    </TitleContainer>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const BackgroundDiv = styled.div`
  width: 35vw; /* 30% of the viewport width */
  height: 100vh; /* Full viewport height */
  background-color: #ece7e1; /* Background color */
  position: absolute; /* Layered behind content */
  top: 0;
  left: 0;
  z-index: -1; /* Ensure it stays behind content */
`;

const Content = styled.div`
  width: 100vw; /* Full viewport width for content */
  padding: 20px;
`;

export const PortfolioSamples = () => {
  const allProjects = Object.values(TextStore.projects);
  return (
    <>
      <Header id="projects">Projects</Header>
      <ContainerDiv>
        {allProjects.map((project, index) =>
          project.homepage ? (
            <PortfolioSection project={project} id={index} key={index} />
          ) : null
        )}
      </ContainerDiv>
    </>
  );
};

function Main() {
  return (
    <Wrapper>
      <BackgroundDiv />
      <Content>
        <section>
          <Body>
            <OpeningSection />
            <FilledContainer>
              <Bio>{TextStore.home.bio}</Bio>
            </FilledContainer>
            <PortfolioSamples />
          </Body>
        </section>
      </Content>
    </Wrapper>
  );
}

export default Main;
