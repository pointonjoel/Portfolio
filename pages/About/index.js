import React from "react";
import {
  Container,
  ImageContainer,
  MobileImageContainer,
} from "../../styles/aboutStyles";
import { Title } from "../../styles/commonStyles";
import Image from "next/legacy/image";
import { TextStore } from "../../components/text/TextStore";

const Contact = () => {
  return (
    <>
      <Title>About</Title>
      <MobileImageContainer>
        <Image
          style={{ borderRadius: "50%" }}
          height={250}
          width={250}
          src={"/profile.png"}
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
            src={"/profile.png"}
            alt={`Profile of Lily Pointon`}
          />
        </ImageContainer>
      </Container>
    </>
  );
};

export default Contact;
