import styles from "./ContentSectionStyles.module.scss";

function ContentSection(props){
    return(
        <section id={props.id} className={styles.contentBlock}>
            <div className={styles.contentBlockItem}>
                <h2>{props.h2}</h2>
                {props.children}
            </div>
        </section>
    );
};

export default ContentSection;