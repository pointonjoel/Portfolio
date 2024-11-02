import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import {
  CentreContainer,
  Container,
  FormContainer,
  FormRow,
  HelperText,
  Input,
  TextArea,
} from "../../styles/contactStyles";
import { Button, Title } from "../../styles/commonStyles";
import { TextStore } from "../../components/text/TextStore";
import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);
  let [sending, setSending] = useState(false);

  let successMsg = "";
  let errorMsg = "";

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
      <Title>Contact</Title>

      <Container>
        <p>{TextStore.contact.message}</p>
        <FormContainer>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <FormRow>
              <label for="name">Name:</label>
              <Input
                id="name"
                type="text"
                name="name"
                required
                {...register("name", {
                  minLength: 2,
                  maxLength: 20,
                })}
              />
            </FormRow>
            <FormRow>
              <label for="reply_to">Email:</label>
              <Input
                id="reply_to"
                type="email"
                name="reply_to"
                required
                {...register("reply_to")}
              />
            </FormRow>
            <FormRow style={{ alignItems: "none" }}>
              <label for="message">Message:</label>
              <TextArea
                id="message"
                name="message"
                required
                {...register("message")}
              />
            </FormRow>
            <CentreContainer>
              <Button type="submit">Send message</Button>
            </CentreContainer>
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

              <ClipLoader
                color="black"
                loading={sending}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </FormRow>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default Contact;
