import styles from "./FlexStyles.module.scss";

function Flex(props){
    return(
        <div className={styles.flexContainer}>
            {props.children}
        </div>
    );
};

export default Flex;