import Navbar from "../../../components/navbar/Navbar";
import { useRouter } from "next/router";
import { TextStore } from "../../../components/text/TextStore";
import { Button } from "./ProjectStyles";
// import file from "../../../public/Project_2.pdf";

const Project = () => {
  const router = useRouter();
  const projectID = router.query.projectID;
  const allProjects = Object.values(TextStore.projects);
  const allProjectNames = Object.keys(allProjects);
  const validProject = allProjectNames.includes(projectID);
  const project = allProjects[projectID];
  console.log(router.query);
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
      <div>Enjoy my {project.name}!</div>
      <div>{project.description}!</div>
      <div>
        <a href="/Project_2.pdf" download="cv">
          <Button primary="false">Download PDF</Button>
        </a>
      </div>
    </>
  );
  return validProject ? PageContent : ErrorContent;
};

export default Project;
