import Image from "next/legacy/image";
import Link from "next/link";
import { Container } from "../../styles/homeStyles";
import styled from "styled-components";
import css from "@styled-system/css";

// New Polaroid style for each project box

const Polaroid = styled.div(
  css({
    minWidth: "110px",
    width: ["150px", "250px"],
    padding: "10px",
    backgroundColor: "white",
    border: "8px solid white",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: ["8px", "20px"],
    position: "relative",
    transition: "transform 0.3s ease", // Smooth transition for the hover effect
    "&:hover": {
      transform: "scale(1.05)",
    },
  })
);

// Style for the project image
const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 2px;
`;

// Title at the bottom of each Polaroid
const ProjectTitle = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  /* font-weight: bold; */
  /* font-family: "Courier New", Courier, monospace; */
`;

// Update PortfolioSection component to use the Polaroid styling
export const PortfolioSection = ({ project, id }) => {
  console.log("project", project);
  return (
    <Link href={`/projects?id=${id}`} key={id} passHref legacyBehavior>
      <Polaroid key={id}>
        <ProjectImage
          src={`/Projects/Project ${id + 1}/main.webp`}
          alt={`Cover photo for ${project.name}`}
          width={200}
          height={200}
          // sizes="100vw"
          // objectFit="cover"
          // layout="fill"
        />
        <ProjectTitle>{project.name}</ProjectTitle>
      </Polaroid>
    </Link>
  );
};

export default PortfolioSection;
