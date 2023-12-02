import Navbar from "../../../components/navbar/Navbar";
import { useRouter } from "next/router";
import { TextStore } from "../../../components/text/TextStore";

const Project = () => {
  const router = useRouter();
  const projectID = router.query.projectID;
  const allProjects = Object.values(TextStore.projects);
  const allProjectNames = Object.keys(allProjects);
  const validProject = allProjectNames.includes(projectID);
  const project = allProjects[projectID];
  console.log(validProject);
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
    </>
  );
  return validProject ? PageContent : ErrorContent;
};

export default Project;
