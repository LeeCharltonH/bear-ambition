import styles from "./ContactStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Contact() {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();
  const messageRef = useRef();

  const formSubmit = (event) => {
    event.preventDefault();

    const fNameValue = fNameRef.current.value;
    const lNameValue = lNameRef.current.value;
    const emailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;
    const serviceValue = serviceRef.current.value;
    const messageValue = messageRef.current.value;

    const formSubmission = {
      fName: fNameValue,
      lName: lNameValue,
      email: emailValue,
      phone: phoneValue,
      service: serviceValue,
      message: messageValue,
    };

    sendFormData(formSubmission);
  };


  const sendFormData = (formSubmission) => {
    fetch(
      "https://bear-ambition-5cf1b-default-rtdb.europe-west1.firebasedatabase.app/enquiries.json",
      {
        method: "POST",
        body: JSON.stringify(formSubmission),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      fNameRef.current.value = '';
      lNameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
      serviceRef.current.value = '';
      messageRef.current.value = '';
    });
  };

  

  return (
    <ContentSection h2="Contact" id="contact">
      <div className={styles.formContainer}>
        <form
          action="https://formspree.io/f/mvodevrl"
          method="post"
          enctype="multipart/form-data"
          onSubmit={formSubmit}
        >
          <div className={styles.formField}>
            <label htmlFor="fname">First name *</label>
            <input
              type="text"
              id="fname"
              minLength="2"
              ref={fNameRef}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="lname">Last name *</label>
            <input type="text" id="lname" ref={lNameRef} required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" ref={emailRef} required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">WhatsApp *</label>
            <input type="tel" id="phone" ref={phoneRef} required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="service">Service</label>
            <select id="service" ref={serviceRef}>
              <option value="Online Coaching">Online coaching</option>
              <option value="Fitness Plans">Fitness Plans</option>
              <option value="In Person Coaching">In Person Coaching</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" id="message" ref={messageRef}></textarea>
          </div>
          <div className={styles.formField}>
            <button>Submit</button>
          </div>
        </form>
        <div className={styles.contactFormImage}>
          <img
            src={require("../../../assets/images/Edd.JPG")}
            alt="Picture of Edd"
          />
        </div>
      </div>
    </ContentSection>
  );
}

export default Contact;
