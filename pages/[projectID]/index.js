import { useRouter } from "next/router";
const Project = () => {
  const router = useRouter();
  const project = router.query.projectID;
  const errorMsg = (
    <div>Project {project} does not exist, please select a valid project!</div>
  );
  return errorMsg;
};

export default Project;
