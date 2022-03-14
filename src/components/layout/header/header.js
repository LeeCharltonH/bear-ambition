import styles from "./HeaderStyles.module.scss";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className={styles.header}>
      <img src={require("../../../assets/images/banner_low_exp.jpg")} />
      <div className={styles.introContainer}>
        <div className={styles.introContainerContent}>
          <div className={styles.introItem}>
            <h1>BEAR AMBITION</h1>
          </div>
          <div className={styles.introItem}>
            <p>
              Exercise and fitness helped me in all aspects of my life giving me
              more energy than I thought possible. My ambition is to help you
              find this too.
            </p>
          </div>
          <div className={styles.introItem}>
            <HashLink smooth to="/bear-ambition/#contact" className={styles.link}>
              <button type="button" class="header-btn">BOOK NOW</button>
            </HashLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
