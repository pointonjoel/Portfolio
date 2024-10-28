// import {
//   Body,
//   Title,
//   TitleContainer,
//   ContainerDiv,
//   Bio,
//   Header,
// } from "../styles/homeStyles";
// import { PortfolioSection } from "../components/portfolioSection/portfolioSection";
// import { FilledContainer } from "../styles/commonStyles";
// import { TextStore } from "../components/text/TextStore";
// import styled from "styled-components";

// const OpeningSection = () => {
//   return (
//     <TitleContainer>
//       <Title>{TextStore.home.title}</Title>
//     </TitleContainer>
//   );
// };
import styled from "styled-components";
import Image from "next/legacy/image";
import { MobileImageContainer } from "../styles/aboutStyles";

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const BackgroundDiv = styled.div`
  width: 40%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Content = styled.div`
  width: 100%;
  padding: 20px;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftSection = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 40px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
`;

const ProfileCard = styled.div`
  width: 300px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 2px;
  padding: 20px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
`;

const Name = styled.h2`
  font-size: 1.5em;
  margin: 10px 0 5px 0;
`;

const Title = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 20px;
`;

const RightSection = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const BioCard = styled.div`
  width: 80%;
  text-align: left;
  border-radius: 2px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 3em;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  margin: 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  background-color: ${(props) => (props.primary ? "#D1BAA8" : "transparent")};
  border: 2px solid #d1baa8;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #d1baa8;
    color: white;
  }
`;

export default function Main() {
  return (
    <Wrapper>
      <BackgroundDiv />
      <Content>
        <Container>
          <LeftSection>
            <ProfileCard>
              {/* <MobileImageContainer>
                <Image
                  style={{ borderRadius: "50%" }}
                  height={250}
                  width={250}
                  src={"/profile.webp"}
                  alt={`Profile of Lily Pointon`}
                />
              </MobileImageContainer> */}
              <Image
                style={{ borderRadius: "50%" }}
                height={150}
                width={150}
                src={"/profile.webp"}
                alt={`Profile of Lily Pointon`}
              />
              <Name>Lily Pointon</Name>
              <Title>Industrial Designer</Title>
              <Button>LinkedIn</Button>
            </ProfileCard>
          </LeftSection>

          <RightSection>
            <BioCard>
              <Heading>Hello</Heading>
              <Description>
                I’m a product design and manufacture engineering, final year,
                MEng student based in Nottingham.
              </Description>
              <ButtonContainer>
                <Button primary>Portfolio</Button>
                <Button>Projects</Button>
              </ButtonContainer>
              <Description>
                I have a passion for good design and want to use what I have
                learnt to make a difference in the world by bringing innovation
                to help solve important problems.
              </Description>
            </BioCard>
          </RightSection>
        </Container>
      </Content>
    </Wrapper>
  );
}
