import React from "react";
import { Container, ImageContainer } from "../../styles/aboutStyles";
import { Title } from "../../styles/commonStyles";
import Image from "next/legacy/image";
import { TextStore } from "../../components/text/TextStore";

const Contact = () => {
  return (
    <>
      <Title>About</Title>

      <Container>
        <p style={{ width: "80%" }}>{TextStore.about.message}</p>
        <ImageContainer>
          {/* <div style={{ }}> */}
          <Image
            // layout="fill"
            // objectFit={"contain"}
            style={{ borderRadius: "50%" }}
            height={250}
            width={250}
            src={"/Profile.png"}
            alt={`Profile of Lily Pointon`}
            // objectFit="cover"
            // objectPosition="center"
            // style={{ float: "right" }}
          />
          {/* </div> */}
        </ImageContainer>
      </Container>
    </>
  );
};

export default Contact;
