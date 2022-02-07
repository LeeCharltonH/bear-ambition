import styles from "./AccordionStyles.module.scss";
import { useState } from "react";
import classNames from "classnames";

function Accordion(props) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const expandAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };

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
      {accordionOpen && (
        <div className={styles.accordionBody} id="panel">
          <p>{props.body}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
