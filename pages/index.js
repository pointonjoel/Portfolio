import React, { useEffect, useState, useRef } from "react";
import {
  ProfileCard,
  Name,
  Title,
  Header,
  ContainerDiv,
} from "../styles/homeStyles";
import { PortfolioSection } from "../components/portfolioSection/portfolioSection";
import { TextStore } from "../components/text/TextStore";
import {
  Wrapper,
  BackgroundDiv,
  Content,
  Container,
  Button,
  Heading,
  LeftSectionWithScroll,
  RightSectionWithScroll,
  BioCard,
  Description,
  ButtonContainer,
} from "../styles/commonStyles";
import useScrollAnimation from "../utils/useScrollAnimation";

import Image from "next/legacy/image";
import Link from "next/link";

const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};

export const PortfolioSamples = () => {
  const allProjects = Object.values(TextStore.projects);
  return (
    <>
      <Header id="projects">Projects</Header>
      <ContainerDiv
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {allProjects.map((project, index) =>
          project.homepage ? (
            <PortfolioSection project={project} id={index} key={index} />
          ) : null
        )}
      </ContainerDiv>
    </>
  );
};

export default function Main() {
  return (
    <Wrapper>
      <BackgroundDiv />
      <Content>
        <Container>
          <LeftSectionWithScroll>
            <ProfileCard>
              <Image
                style={{ borderRadius: "50%" }}
                height={150}
                width={150}
                src={"/profile.webp"}
                alt="Profile of Lily Pointon"
                loading="eager" // Disable lazy loading
              />
              <Name>{TextStore.home.title}</Name>
              <Title>{TextStore.home.subtitle}</Title>
              <Link
                href="https://www.linkedin.com/in/lily-pointon-730476291"
                target="_blank"
                style={{ paddingRight: "10px" }}
              >
                <Image
                  style={{ borderRadius: "15%" }}
                  height={40}
                  width={40}
                  src={"/linkedin.webp"}
                  alt="Linkedin logo"
                  loading="eager" // Disable lazy loading
                />
              </Link>
              <Link
                href="https://www.instagram.com/lilys_glass_art/"
                target="_blank"
              >
                <Image
                  style={{ borderRadius: "15%" }}
                  height={40}
                  width={40}
                  src={"/instagram.webp"}
                  alt="Instagram logo"
                  loading="eager" // Disable lazy loading
                />
              </Link>
            </ProfileCard>
          </LeftSectionWithScroll>

          <RightSectionWithScroll>
            <BioCard>
              <Heading>{TextStore.home.heading}</Heading>
              <Description>{TextStore.home.bio}</Description>
              <ButtonContainer>
                <Button
                  primary
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Lily Pointon Portfolio.pdf"; // Relative path from the public folder
                    link.download = "Lily Pointon Portfolio.pdf"; // Sets the default file name for download
                    link.click();
                  }}
                >
                  Portfolio
                </Button>
                <Button onClick={scrollToProjects}>Projects</Button>
              </ButtonContainer>
              <Description light style={{ marginBottom: "0px" }}>
                {TextStore.home.bio_2}
              </Description>
            </BioCard>
          </RightSectionWithScroll>
        </Container>
      </Content>
      <PortfolioSamples />
    </Wrapper>
  );
}
