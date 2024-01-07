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
  let nameError = "";
  let emailError = "";
  let messageError = "";
  if (errors.name?.type === "required") {
    nameError = "Please enter a name";
  } else if (
    errors.name?.type === "minLength" ||
    errors.name?.type === "maxLength"
  ) {
    nameError = "Please enter a name of between 2 and 20 characters";
  }
  if (errors.email?.type === "required") {
    emailError = "Please enter an email address";
  } else if (errors.email?.type === "pattern") {
    emailError = "Please enter a valid email address";
  }
  if (errors.message?.type === "required") {
    messageError = "Please enter a message";
  }
  return (
    <>
      <Title>Contact</Title>

      <Container>
        <p>{TextStore.contact.message}</p>
        <FormContainer>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <FormRow>
              <label>Name:</label>
              <Input
                type="text"
                name="name"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
              />
            </FormRow>
            <FormRow>
              <HelperText role="alert">{nameError}</HelperText>
            </FormRow>
            <FormRow>
              <label>Email:</label>
              <Input
                type="text"
                name="reply_to"
                {...register("email", {
                  required: true,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
              />
            </FormRow>
            <FormRow>
              <HelperText role="alert">{emailError}</HelperText>
            </FormRow>
            <FormRow style={{ alignItems: "none" }}>
              <label>Message:</label>
              <TextArea
                name="message"
                {...register("message", { required: true })}
              />
            </FormRow>
            <FormRow>
              <HelperText role="alert">{messageError}</HelperText>
              {errors && console.log(errors)}
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
                color="#00000"
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
