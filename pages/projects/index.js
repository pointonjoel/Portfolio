import { useRouter } from "next/router";
import { TextStore } from "../../components/text/TextStore";
import {
  Container,
  ProjectsContainer,
  ProjectsHeading,
  ScrollContainer,
  Button,
  Wrapper,
  BackgroundDiv,
  Content,
  LeftSectionWithScroll,
  RightSectionWithScroll,
  BioCard,
  Description,
  ButtonContainer,
} from "../../styles/commonStyles";
import PortfolioSection from "../../components/portfolioSection/portfolioSection";
import { useState, useEffect } from "react";
import styled from "styled-components";
import css from "@styled-system/css";

const ProjectImage = ({ projectNum, projectName }) => {
  return (
    <div style={{ width: "90%" }}>
      <img
        src={`/Projects/Project ${projectNum}/render.webp`}
        alt={`${projectName} Render`}
        loading="eager" // Disable lazy loading
        style={{
          objectFit: "cover", // Make the image cover the entire container
          width: "100%", // Make the image stretch to fill the container's width
          height: "100%", // Make the image stretch to fill the container's height
        }}
      />
    </div>
  );
};

const ErrorContent = (
  <>
    <div>Project does not exist, please select a valid project ID!</div>
  </>
);

const Heading = styled.p(
  css({
    fontWeight: "bold",
    fontSize: ["3em", null, "5em"],
  })
);

const Project = () => {
  const router = useRouter();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setId(router.query.id); // Access the 'id' query parameter
    }
  }, [router.isReady, router.query.id]);

  if (!id) return <div>Loading...</div>;

  const projectNum = Number(id) + 1;
  const allProjects = TextStore.projects;
  const allProjectNames = Object.keys(allProjects);
  const validProject = allProjectNames.includes(id);
  if (!validProject) return ErrorContent;

  const project = allProjects[id];

  return (
    <>
      <Wrapper>
        <BackgroundDiv />
        <Content>
          <Container>
            <LeftSectionWithScroll>
              <ProjectImage
                projectNum={projectNum}
                projectName={project.name}
              />
            </LeftSectionWithScroll>
            <RightSectionWithScroll>
              <BioCard>
                <Heading font-size={["1em"]}>{project.name}</Heading>
                <Description>{project.description}</Description>
                <ButtonContainer>
                  <Button
                    primary
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = `/Projects/Project ${projectNum}/download.${project.download}`; // Relative path from the public folder
                      link.download = `${project.name} Project`; // Sets the default file name for download
                      link.click();
                    }}
                  >
                    Portfolio
                  </Button>
                </ButtonContainer>
              </BioCard>
            </RightSectionWithScroll>
          </Container>
        </Content>

        <ProjectsContainer>
          <ProjectsHeading>Other Projects</ProjectsHeading>
          <ScrollContainer>
            {allProjects.map((project, index) =>
              project.homepage && index != id ? (
                <PortfolioSection project={project} id={index} key={index} />
              ) : null
            )}
          </ScrollContainer>
        </ProjectsContainer>
      </Wrapper>
    </>
  );
};

export default Project;
