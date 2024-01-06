import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(undefined);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1cmgwkc",
        "template_puc1waj",
        form.current,
        "VbXXzUaYQpXZLhM-u"
      )
      .then(
        (result) => {
          setStatus({ type: "success", value: result });
        },
        (error) => {
          setStatus({ type: "error", value: error });
        }
      );
  };
  let successMsg = "";
  if (status) {
    if (status.type === "success") {
      successMsg = "Successfully sent";
      console.log(successMsg);
    } else if (status.type === "error") {
      successMsg = "Error, please try again later";
      console.log(successMsg);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          name="from_name"
          {...register("name", { required: true })}
        />
        <label>Email</label>
        <input
          type="email"
          name="from_email"
          {...register("email", { required: true })}
        />
        <label>Message</label>
        <textarea name="message" {...register("message", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <input type="submit" value="Send" />
      </form>
      <p>{successMsg}</p>
    </>
  );
};

export default Contact;
