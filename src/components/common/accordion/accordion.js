import styles from "./AccordionStyles.module.scss";
import { useState } from "react";
import classNames from "classnames";

function Accordion(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const expandAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

  const accordionStyles = `${styles.accordionBody} ${
    accordionOpen ? styles.show : ""
  }`;

  return (
    <div className={styles.accordionContainer}>
      <div
        className={classNames(
          styles.accordionHeader,
          accordionOpen && styles.active
        )}
        id="accordionbtn"
        onClick={expandAccordion}
      >
        <h3>{props.title}</h3>
      </div>
      <div className={accordionStyles} id="panel">
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Accordion;
