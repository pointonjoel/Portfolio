import { useRouter } from "next/router";
import { TextStore } from "../../../components/text/TextStore";
import {
  Container,
  Title,
  TitleContainer,
} from "../../../styles/projectStyles";
import { Button, FilledContainer } from "../../../styles/commonStyles";
import render1 from "../../../public/Projects/Project 1/render.png";
import render2 from "../../../public/Projects/Project 2/render.png";
import render3 from "../../../public/Projects/Project 3/render.png";
import render4 from "../../../public/Projects/Project 4/render.png";
import render5 from "../../../public/Projects/Project 5/render.png";
// import render6 from "../../../public/Projects/Project 6/render.png";
// import render7 from "../../../public/Projects/Project 6/render.png";

// import dynamic from "next/dynamic";

// const DynamicHeader = dynamic(
//   () => {
//     const router = useRouter();
//     const projectID = router.query.projectID;
//     const projectNum = Number(projectID) + 1;
//     import("../../../public/Projects/Project 1/render.png");
//   },
//   {
//     loading: () => <p>Loading...</p>,
//   }
// );

// To enable page reload with the slug
export async function getStaticProps() {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}

export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

const Project = ({ repo }) => {
  const router = useRouter();
  const projectID = router.query.projectID;
  const projectNum = Number(projectID) + 1;
  const allProjects = Object.values(TextStore.projects);
  const allProjectNames = Object.keys(allProjects);
  const validProject = allProjectNames.includes(projectID);
  const project = allProjects[projectID];
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
      <div>
        Project {projectID} does not exist, please select a valid project ID!
      </div>
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
        <FilledContainer>{project.description}</FilledContainer>
      </Container>
      {/* <PDFContainer>
        <object
          data="/Project_2.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>
            Your web browser doesn't have a PDF plugin. Instead you can{" "}
            <a href="/Project_2.pdf">click here</a> to download the PDF file.
          </p>
        </object>
      </PDFContainer> */}
    </>
  );
  return validProject ? PageContent : ErrorContent;
};

export default Project;
