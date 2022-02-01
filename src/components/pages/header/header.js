import styles from "./HeaderStyles.module.scss";

function Header() {
  return (
    <div className={styles.header}>
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
            <button type="button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
