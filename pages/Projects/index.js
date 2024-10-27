import { useRouter } from "next/router";
import { TextStore } from "../../components/text/TextStore";
import {
  Container,
  Description,
  ProjectsContainer,
  ProjectsHeading,
  Title,
  TitleContainer,
  ScrollContainer,
} from "../../styles/projectStyles";
import { Button, FilledContainer } from "../../styles/commonStyles";
import PortfolioSection from "../../components/portfolioSection/portfolioSection";
import render1 from "../../public/Projects/Project 1/render.webp";
import render2 from "../../public/Projects/Project 2/render.webp";
import render3 from "../../public/Projects/Project 3/render.webp";
import render4 from "../../public/Projects/Project 4/render.webp";
import render5 from "../../public/Projects/Project 5/render.webp";
import { useState, useEffect } from "react";

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
  const allProjects = Object.values(TextStore.projects);
  const allProjectNames = Object.keys(allProjects);
  const validProject = allProjectNames.includes(id);
  const project = allProjects[id];

  let render = render1;
  if (projectNum === 1) {
    render = render1;
  } else if (projectNum === 2) {
    render = render2;
  } else if (projectNum === 3) {
    render = render3;
  } else if (projectNum === 4) {
    render = render4;
  } else if (projectNum === 5) {
    render = render5;
  } else {
    render = "";
  }
  const ErrorContent = (
    <>
      <div>Project {id} does not exist, please select a valid project ID!</div>
    </>
  );
  const PageContent = (
    <>
      <TitleContainer
        style={{
          backgroundImage: `url(${render.src})`,
        }}
      >
        <Title>{project.name}</Title>
      </TitleContainer>
      <Container>
        <a
          href={`/Projects/Project ${projectNum}/download.${project.download}`}
          download={`${project.name} Project`}
        >
          <Button>Download PDF</Button>
        </a>
      </Container>

      <FilledContainer style={{ marginBottom: "80px" }}>
        <Description>{project.description}</Description>
      </FilledContainer>

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
    </>
  );
  return validProject ? PageContent : ErrorContent;
};

export default Project;
