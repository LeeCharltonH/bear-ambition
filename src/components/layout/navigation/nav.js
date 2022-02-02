import styles from "./NavStyles.module.scss";
import { HashLink } from 'react-router-hash-link';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <HashLink smooth to="/#"><img src={require("../../../assets/images/hplogo.jpg")} /></HashLink>
      <ul className={styles.ul}>
        <li><HashLink smooth to="/#services" className={styles.link}>Services</HashLink></li>
        <li><HashLink smooth to="/#pricing" className={styles.link}>Pricing</HashLink></li>
        <li><HashLink smooth to="/#contact" className={styles.link}>Contact</HashLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
