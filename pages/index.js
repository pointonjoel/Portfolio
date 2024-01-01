import Navbar from "../components/navbar/Navbar";
import {
  Body,
  Title,
  TitleContainer,
  Container,
  Bio,
  Header,
  ContainerDiv,
  ProjectTitle,
  ImageContainer,
} from "./indexStyles";
import { TextStore } from "../components/text/TextStore";
import Image from "next/legacy/image";
import Link from "next/link";

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
      <Header>Projects</Header>
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
        <ImageContainer>
          <Image
            // layout="fill"
            // objectFit={"contain"}
            // layout={"fill"}
            // objectFit={"contain"}
            height={210}
            width={310}
            src={project.photo}
            alt={`Cover photo for ${project.name}`}
          />
        </ImageContainer>
      </Container>
    </Link>
  );
};

function Main() {
  return (
    <section>
      <Navbar />
      <Body>
        <OpeningSection />
        <Bio>{TextStore.home.bio}</Bio>
        <PortfolioSamples />
      </Body>
    </section>
  );
}

export default Main;
