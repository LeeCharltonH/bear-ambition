import styles from "./NavStyles.module.scss";
import { HashLink } from "react-router-hash-link";
import classNames from "classnames";
import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  const [mobileNavOpen, setMobileNav] = useState(true);
  const [burgerNavX, setburgerNavX] = useState(false);

  const mobileNav = () => {
    setMobileNav(!mobileNavOpen);
    setburgerNavX(!burgerNavX);
  };

  useEffect(() => {
    let mobileListItems = document.querySelectorAll("#mobileNav li");

    for (let x = 0; x < mobileListItems.length; x++) {
      mobileListItems[x].addEventListener("click", mobileNav);
    }
  }, []);

  let mobileListItems = document.querySelectorAll("#mobileNav li");
  for (let x = 0; x < mobileListItems.length; x++) {
    mobileListItems[x].addEventListener("click", mobileNav);
  }

  return (
    <nav className={styles.nav}>
      <HashLink smooth to="/#">
        <img src={require("../../../assets/images/hplogo.jpg")} />
      </HashLink>
      <ul className={styles.ul}>
        <li>
          <HashLink smooth to="/#services" className={styles.link}>
            Services
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#pricing" className={styles.link}>
            Pricing
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className={styles.link}>
            Contact
          </HashLink>
        </li>
      </ul>
      <div
        className={classNames(
          styles.burgerNav,
          burgerNavX && styles.burgerNavX
        )}
        onClick={mobileNav}
      >
        <div></div>
      </div>
      <div
        id="mobileNav"
        className={classNames(styles.mobileNav, mobileNavOpen && styles.hide)}
      >
        <ul>
          <li className={styles.mobileNavLi}>
            <HashLink smooth to="/#services" className={styles.link}>
              Services
            </HashLink>
          </li>
          <li className={styles.mobileNavLi}>
            <HashLink smooth to="/#pricing" className={styles.link}>
              Pricing
            </HashLink>
          </li>
          <li className={styles.mobileNavLi}>
            <HashLink smooth to="/#contact" className={styles.link}>
              Contact
            </HashLink>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <a
              href="https://www.instagram.com/e.charltonhassall/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                className={styles.icon}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/Bear-Ambition-349595296071659"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className={styles.icon}
              />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@eddcharlton" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "tiktok"]}
                className={styles.icon}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
