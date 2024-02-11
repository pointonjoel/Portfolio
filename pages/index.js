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
