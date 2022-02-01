import styles from './NavStyles.module.scss';

function Navigation() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li >Services</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
