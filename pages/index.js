import Navbar from "../components/navbar/Navbar";
import {
  Body,
  MainRender,
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
    <div>
      <MainRender src={mainRender} alt="Example render" width="900" />
      <TitleContainer>
        <Title>
          <TypedText>{TextStore.home.title}</TypedText>
        </Title>
      </TitleContainer>
    </div>
  );
};

const PortfolioSamples = () => {
  return (
    <>
      <Header>Projects</Header>
      <ContainerDiv>
        {Object.values(TextStore.projects).map((project) =>
          project.homepage ? <PortfolioSection project={project} /> : null
        )}
      </ContainerDiv>
    </>
  );
};

import project1Photo from "../public/Project_1.png";
import project2Photo from "../public/Project_2.png";
// import project3Photo from "../../public/Project_3.png";
// import project4Photo from "../../public/Project_4.png";
// import project5Photo from "../../public/Project_5.png";
// import project6Photo from "../../public/Project_6.png";
// let testing = require("../public/Project_1.png");

const PortfolioSection = (project) => {
  console.log(project1Photo); // /logo.84287d09.png

  return (
    <Link href="/" passHref legacyBehavior>
      <Container>
        <ProjectTitle>{project.project.name}</ProjectTitle>
        <div style={{ height: "200px", position: "relative" }}>
          <Image
            fill={true}
            objectFit={"contain"}
            src={project.project.photo}
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
