import Navbar from "../../../components/navbar/Navbar";
import { useRouter } from "next/router";
import { TextStore } from "../../../components/text/TextStore";
import { Button, PDFContainer, Container } from "./ProjectStyles";
import { Document, Page } from "react-pdf";

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

  const ErrorContent = (
    <>
      <Navbar />
      <div>
        Project {projectID} does not exist, please select a valid project ID!
      </div>
    </>
  );
  const PageContent = (
    <>
      <Navbar />
      <Container>
        <div>Enjoy my {project.name}!</div>
        <div>{project.description}!</div>
        <a
          href={`/Project_${projectNum}.${project.download}`}
          download={`${project.name} Project`}
        >
          <Button>Download PDF</Button>
        </a>
      </Container>
      <PDFContainer>
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
      </PDFContainer>
      Some text
    </>
  );
  return validProject ? PageContent : ErrorContent;
};

export default Project;
