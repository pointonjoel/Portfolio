import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  CentreContainer,
  FormRow,
  Input,
  TextArea,
  FormContainer,
  Container,
  Heading,
} from "../../styles/contactStyles";
import {
  Wrapper,
  BackgroundDiv,
  Content,
  Button,
} from "../../styles/commonStyles";
import { TextStore } from "../../components/text/TextStore";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

import PortfolioSection from "../../components/portfolioSection/portfolioSection";
import {
  ProjectsContainer,
  ProjectsHeading,
  ScrollContainer,
} from "../../styles/projectStyles";

const ResponsiveProjectsContainer = styled(ProjectsContainer)`
  display: none; /* Hide by default */

  @media (max-width: 768px) {
    /* Adjust the max-width as per your design */
    display: block; /* Show on mobile */
  }
`;

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);
  let [sending, setSending] = useState(false);

  let successMsg = "";
  let errorMsg = "";
  const allProjects = Object.values(TextStore.projects);

  const sendEmail = (e) => {
    setStatus({ type: "", value: "" });
    setSending(true);
    emailjs
      .sendForm(
        "service_1cmgwkc",
        "template_22o3m82",
        form.current,
        "VbXXzUaYQpXZLhM-u"
      )
      .then(
        (result) => {
          setStatus({ type: "success", value: result });
          setSending(false);
        },
        (error) => {
          setStatus({ type: "error", value: error });
          setSending(false);
        }
      );
  };

  if (status) {
    if (status.type === "success") {
      successMsg = "Your message has been successfully sent!";
    } else if (status.type === "error") {
      errorMsg =
        "We've encountered an unexpected error, please try again later.";
    } else {
      successMsg = "";
      errorMsg = "";
    }
  }

  useEffect(() => {
    reset();
  }, [successMsg]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <Wrapper>
        <BackgroundDiv />
        <Content>
          <Container>
            <Heading>Get in touch</Heading>
            <FormContainer>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <FormRow>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    {...register("name", {
                      minLength: 2,
                      maxLength: 20,
                    })}
                  />
                </FormRow>
                <FormRow>
                  <Input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    placeholder="Your email"
                    required
                    {...register("reply_to")}
                  />
                </FormRow>
                <FormRow style={{ alignItems: "none" }}>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Leave me a message"
                    required
                    {...register("message")}
                  />
                </FormRow>
                <CentreContainer>
                  {sending ? (
                    <ClipLoader
                      color="black"
                      loading={sending}
                      size={30}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    <Button type="submit">Send message</Button>
                  )}
                </CentreContainer>
                {(successMsg || errorMsg) && (
                  <FormRow
                    style={{
                      justifyContent: "center",
                      fontSize: "17px",
                      paddingTop: "10px",
                    }}
                  >
                    <p>
                      {successMsg}
                      {errorMsg}
                    </p>
                  </FormRow>
                )}
              </form>
            </FormContainer>

            <ResponsiveProjectsContainer style={{ marginTop: "50px" }}>
              <ProjectsHeading>Projects</ProjectsHeading>
              <ScrollContainer>
                {allProjects.map((project, index) => (
                  <PortfolioSection project={project} id={index} key={index} />
                ))}
              </ScrollContainer>
            </ResponsiveProjectsContainer>
          </Container>
        </Content>
      </Wrapper>
    </>
  );
};

export default Contact;
