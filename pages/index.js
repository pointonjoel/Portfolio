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
              <Button>LinkedIn</Button>
            </ProfileCard>
          </LeftSection>

          <RightSection>
            <BioCard>
              <Heading>{TextStore.home.heading}</Heading>
              <Description>{TextStore.home.bio}</Description>
              <ButtonContainer>
                <Button primary>Portfolio</Button>
                <Button>Projects</Button>
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
