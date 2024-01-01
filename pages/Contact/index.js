import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/navbar/Navbar";

const ContactUs = () => {
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

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" />
        <label>Email</label>
        <input type="email" name="from_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <p>{successMsg}</p>
    </>
  );
};

function Main() {
  return (
    <section>
      <Navbar />
      <div>Yo, I'm Lil Pointon</div>
      <ContactUs />
    </section>
  );
}

export default Main;
