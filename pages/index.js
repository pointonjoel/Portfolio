import {
  LeftSection,
  ProfileCard,
  RightSection,
  BioCard,
  Description,
  ButtonContainer,
  Name,
  Title,
  Header,
  ContainerDiv,
} from "../styles/homeStyles";
import { PortfolioSection } from "../components/portfolioSection/portfolioSection";
import { TextStore } from "../components/text/TextStore";
import {
  Wrapper,
  BackgroundDiv,
  Content,
  Container,
  Button,
  Heading,
} from "../styles/commonStyles";

import Image from "next/legacy/image";

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const PortfolioSamples = () => {
  const allProjects = Object.values(TextStore.projects);
  return (
    <>
      <Header id="projects">Projects</Header>
      <ContainerDiv
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {allProjects.map((project, index) =>
          project.homepage ? (
            <PortfolioSection project={project} id={index} key={index} />
          ) : null
        )}
      </ContainerDiv>
    </>
  );
};

export default function Main() {
  return (
    <Wrapper>
      <BackgroundDiv />
      <Content>
        <Container>
          <LeftSection>
            <ProfileCard>
              <Image
                style={{ borderRadius: "50%" }}
                height={150}
                width={150}
                src={"/profile.webp"}
                alt={`Profile of Lily Pointon`}
              />
              <Name>{TextStore.home.title}</Name>
              <Title>{TextStore.home.subtitle}</Title>
              <Button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/lily-pointon-730476291",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </Button>
            </ProfileCard>
          </LeftSection>

          <RightSection>
            <BioCard>
              <Heading>{TextStore.home.heading}</Heading>
              <Description>{TextStore.home.bio}</Description>
              <ButtonContainer>
                <Button
                  primary
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Lily Pointon Portfolio.pdf"; // Relative path from the public folder
                    link.download = "Lily Pointon Portfolio.pdf"; // Sets the default file name for download
                    link.click();
                  }}
                >
                  Portfolio
                </Button>
                <Button onClick={scrollToProjects}>Projects</Button>
              </ButtonContainer>
              <Description light style={{ marginBottom: "0px" }}>
                {TextStore.home.bio_2}
              </Description>
            </BioCard>
          </RightSection>
        </Container>
      </Content>
      <PortfolioSamples />
    </Wrapper>
  );
}
