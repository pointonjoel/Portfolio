import Image from "next/legacy/image";
import Link from "next/link";
import { Container, ProjectTitle } from "../../styles/homeStyles";

export const PortfolioSection = ({ project, id }) => {
  return (
    <Link href={`/Projects/${id}`} key={id} passHref legacyBehavior>
      <Container>
        <ProjectTitle>{project.name}</ProjectTitle>
        <Image
          // layout="fill"
          // objectFit={"contain"}
          // layout={"fill"}
          // objectFit={"contain"}
          height={210}
          width={310}
          // src={project.photo}
          src={`/Projects/Project ${id + 1}/main.png`}
          alt={`Cover photo for ${project.name}`}
          // style={{ paddingBottom: "10px" }}
        />
      </Container>
    </Link>
  );
};

export default PortfolioSection;
