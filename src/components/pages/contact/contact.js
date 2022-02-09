import styles from "./ContactStyles.module.scss";
import ContentSection from "../../common/contentSection/contentSection";
import Map from "../../common/map/map";

function Contact() {
  return (
    <ContentSection h2="Contact" id="contact">
      <div className={styles.formContainer}>
        <form
          action="https://formspree.io/f/mvodevrl"
          method="post"
          enctype="multipart/form-data"
        >
          <div className={styles.formField}>
            <label htmlFor="fname">First name *</label>
            <input type="text" id="fname" minLength="2" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="lname">Last name *</label>
            <input type="text" id="lname" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.formField}>
            <label htmlFor="service">Service</label>
            <select id="service">
              <option value="au">Online coaching</option>
              <option value="ca">Fitness Plans</option>
              <option value="usa">In Person Coaching</option>
            </select>
          </div>
          <div className={styles.formField}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" id="message"></textarea>
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
