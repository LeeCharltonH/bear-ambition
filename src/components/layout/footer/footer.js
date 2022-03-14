import styles from "./FooterStyles.module.scss";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <p>Quick links</p>
          <ul>
            <li><HashLink smooth to="/bear-ambition/#services" className={styles.link}>Services</HashLink></li>
            <li><HashLink smooth to="/bear-ambition/#pricing" className={styles.link}>Pricing</HashLink></li>
            <li><HashLink smooth to="/bear-ambition/#contact" className={styles.link}>Contact</HashLink></li>
          </ul>
        </div>
        <div>
          <p>Social links</p>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/e.charltonhassall/"
                target="_blank"
              ><FontAwesomeIcon icon={['fab', 'instagram']} className={styles.icon} /></a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/Bear-Ambition-349595296071659"
                target="_blank"
              ><FontAwesomeIcon icon={['fab', 'facebook-f']} className={styles.icon} /></a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@eddcharlton"
                target="_blank"
              ><FontAwesomeIcon icon={['fab', 'tiktok']} className={styles.icon} /></a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyRight}>&#169; Bear Amition</p>
    </footer>
  );
}

export default Footer;
