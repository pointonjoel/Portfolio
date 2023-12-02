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
  TypedText,
} from "./indexStyles";
import mainRender from "../public/mainRender.png";
import { TextStore } from "../components/text/TextStore";
import Image from "next/image";
import Link from "next/link";

const OpeningSection = () => {
  return (
    <TitleContainer>
      <Title>
        {/* {TextStore.home.title} */}
        <TypedText>{TextStore.home.title}</TypedText>
      </Title>
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
            <PortfolioSection project={project} id={index} />
          ) : null
        )}
      </ContainerDiv>
    </>
  );
};

const PortfolioSection = ({ project, id }) => {
  return (
    <Link href={`/Projects/${id}`} passHref legacyBehavior>
      <Container>
        <ProjectTitle>{project.name}</ProjectTitle>
        <div style={{ height: "200px", position: "relative" }}>
          <Image
            fill={true}
            objectFit={"contain"}
            src={project.photo}
            // alt={`Cover photo for ${project.project.name}`}
            // width={100}
          />
        </div>
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
