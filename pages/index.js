import { ContainerDiv, Header } from "../styles/homeStyles";
import { PortfolioSection } from "../components/portfolioSection/portfolioSection";
import { TextStore } from "../components/text/TextStore";

import styled from "styled-components";
import Image from "next/legacy/image";
import css from "@styled-system/css";

const Wrapper = styled.div`
  position: relative;
`;

const BackgroundDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
`;

const Container = styled.div(
  css({
    display: "flex",
    flexDirection: ["column", "row"], // column on small screens, row on larger screens
    width: "100%",
    height: "100%",
  })
);

const LeftSection = styled.div(
  css({
    width: ["100%", "50%"], // Full width on small screens, 50% on larger screens
    display: "flex",
    alignItems: "center",
    justifyContent: ["center", "flex-end"], // Centered on small screens
    paddingRight: [0, "40px"], // Remove padding on small screens
    paddingBottom: ["20px", 0], // Optional padding on small screens
  })
);

const ProfileCard = styled.div`
  width: 300px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 10px 0 5px 0;
`;

const Title = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
`;

const RightSection = styled.div(
  css({
    width: ["100%", "50%"], // Full width on small screens, 50% on larger screens
    padding: ["20px", "40px"], // Adjust padding for smaller screens
    display: "flex",
    flexDirection: "column",
    justifyContent: ["left", "center"],
  })
);

const BioCard = styled.div(
  css({
    width: ["100%", "80%"],
    textAlign: ["center", "left"],
    borderRadius: "2px",
    padding: ["0px", "20px"],
  })
);

const Heading = styled.h1`
  font-size: 5em;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: ${(props) => (props.light ? "1.1em" : "1.2em")};
  line-height: 1.5;
  margin: 20px 0;
  font-weight: ${(props) => (props.light ? 300 : 400)};
`;

const ButtonContainer = styled.div(
  css({
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    justifyContent: ["center", "left"],
  })
);

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${(props) => (props.primary ? "#D1BAA8" : "transparent")};
  border: 2px solid #d1baa8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d1baa8;
    color: white;
  }
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
              <Name>Lily Pointon</Name>
              <Title>Industrial Designer</Title>
              <Button>LinkedIn</Button>
            </ProfileCard>
          </LeftSection>

          <RightSection>
            <BioCard>
              <Heading>Hello</Heading>
              <Description>
                I’m a product design and manufacture engineering, final year,
                MEng student based in Nottingham.
              </Description>
              <ButtonContainer>
                <Button primary>Portfolio</Button>
                <Button>Projects</Button>
              </ButtonContainer>
              <Description light>
                I have a passion for good design and want to use what I have
                learnt to make a difference in the world by bringing innovation
                to help solve important problems.
              </Description>
            </BioCard>
          </RightSection>
        </Container>
      </Content>
      <PortfolioSamples />
    </Wrapper>
  );
}
