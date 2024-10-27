import Image from "next/legacy/image";
import Link from "next/link";
import { Container, ProjectTitle } from "../../styles/homeStyles";

export const PortfolioSection = ({ project, id }) => {
  return (
    <Link href={`/Projects?id=${id}`} key={id} passHref legacyBehavior>
      <Container>
        <ProjectTitle>{project.name}</ProjectTitle>
        <Image
          src={`/Projects/Project ${id + 1}/main.webp`}
          alt={`Cover photo for ${project.name}`}
          width={0}
          height={0}
          sizes="100vw"
          objectFit="cover"
        />
      </Container>
    </Link>
  );
};

export default PortfolioSection;
