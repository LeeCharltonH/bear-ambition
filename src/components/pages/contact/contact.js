import styles from "./ContactStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import { useRef } from "react";

function Contact() {
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const serviceRef = useRef();
  const messageRef = useRef();
  const pronounsRef = useRef();


  const formSubmit = (event) => {
    event.preventDefault();

    const fNameValue = fNameRef.current.value;
    const lNameValue = lNameRef.current.value;
    const emailValue = emailRef.current.value;
    const phoneValue = phoneRef.current.value;
    const serviceValue = serviceRef.current.value;
    const messageValue = messageRef.current.value;
    const pronounsValue = pronounsRef.current.value;

    const formSubmission = {
      pronouns: pronounsValue,
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
      pronounsRef.current.value = "";
      fNameRef.current.value = "";
      lNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      serviceRef.current.value = "";
      messageRef.current.value = "";
    });
  };

  return (
    <ContentSection h2="Contact" id="contact">
      <div className={styles.formContainer}>
        <form
          action="https://formspree.io/f/mvodevrl"
          method="post"
          encType="multipart/form-data"
          onSubmit={formSubmit}
          class="contact-form"
        >
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="pronouns">
              Pronouns
            </label>
            <select id="pronouns" ref={pronounsRef}>
              <option value=""></option>
              <option value="He/Him">He/Him</option>
              <option value="She/Her">She/Her</option>
              <option value="They/Them">They/Them</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="fname">
              First name *
            </label>
            <input
              type="text"
              id="fname"
              minLength="2"
              ref={fNameRef}
              className={styles.inputBox}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="lname">
              Last name *
            </label>
            <input
              type="text"
              id="lname"
              ref={lNameRef}
              className={styles.inputBox}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="email">
              Email *
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className={styles.inputBox}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="email">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="phone"
              ref={phoneRef}
              className={styles.inputBox}
              required
            />
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="service">
              Service
            </label>
            <select id="service" ref={serviceRef}>
              <option value=""></option>
              <option value="Online Coaching">Online coaching</option>
              <option value="Fitness Plans">Fitness Plans</option>
              <option value="In Person Coaching">In Person Coaching</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label className={styles.labelBox} htmlFor="message">
              Message
            </label>
            <textarea rows="5" id="message" ref={messageRef}></textarea>
          </div>
          <div className={styles.formField}>
            <button class="contact-form-btn">Submit</button>
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
