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

// import { useEffect } from "react";

const OpeningSection = () => {
  return (
    <TitleContainer>
      <Title>{TextStore.home.title}</Title>
    </TitleContainer>
  );
};

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
    <section>
      <Body>
        <OpeningSection />
        <FilledContainer>
          <Bio>{TextStore.home.bio}</Bio>
        </FilledContainer>
        <PortfolioSamples />
      </Body>
    </section>
  );
}

export default Main;

// Proejcts navbar turn black
// Reply to contact requests okay
// Center other projects
// Projects on mobile
// Lil fill out the text content
