import React from "react";
import {
  Container,
  ImageContainer,
  MobileImageContainer,
} from "../../styles/aboutStyles";
import { Heading } from "../../styles/commonStyles";
import Image from "next/legacy/image";
import { TextStore } from "../../components/text/TextStore";
import styled from "styled-components";
import { css } from "@styled-system/css";

const StyledContainer = styled.div`
  ${css({
    textAlign: "center",
    marginTop: ["20px", null, "50px"],
    fontSize: "0.8rem",
  })}
`;

const Contact = () => {
  return (
    <>
      <StyledContainer>
        <Heading>About</Heading>
      </StyledContainer>
      <MobileImageContainer>
        <Image
          style={{ borderRadius: "50%" }}
          height={250}
          width={250}
          src={"/profile.webp"}
          alt={`Profile of Lily Pointon`}
        />
      </MobileImageContainer>
      <Container>
        <p style={{ width: "100%" }}>
          {TextStore.about.message.map((s) => (
            <>
              <p>{s}</p>
              <br></br>
            </>
          ))}
        </p>
        <ImageContainer>
          <Image
            style={{ borderRadius: "50%" }}
            height={250}
            width={250}
            src={"/profile.webp"}
            alt={`Profile of Lily Pointon`}
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Contact;
