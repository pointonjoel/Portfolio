import {
  Body,
  Title,
  TitleContainer,
  ContainerDiv,
  Container,
  ProjectTitle,
  Bio,
  Header,
} from "../styles/homeStyles";
import { FilledContainer } from "../styles/commonStyles";
import { TextStore } from "../components/text/TextStore";
import Image from "next/legacy/image";
import Link from "next/link";

// import { useEffect } from "react";

const OpeningSection = () => {
  return (
    <TitleContainer>
      <Title>{TextStore.home.title}</Title>
    </TitleContainer>
  );
};

const PortfolioSamples = () => {
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

const PortfolioSection = ({ project, id }) => {
  return (
    <Link href={`/Projects/${id}`} key={id} passHref legacyBehavior>
      <Container>
        <ProjectTitle>{project.name}</ProjectTitle>
        <Image
          // layout="fill"
          // objectFit={"contain"}
          // layout={"fill"}
          // objectFit={"contain"}
          height={210}
          width={310}
          // src={project.photo}
          src={`/Projects/Project ${id + 1}/main.png`}
          alt={`Cover photo for ${project.name}`}
        />
      </Container>
    </Link>
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
