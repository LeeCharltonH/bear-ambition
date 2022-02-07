import styles from "./CardStyles.module.scss";

function Card(props){
    return(
        <div className={styles.serviceCard}>
            <img src={require("../../../assets/images/bearIcon.png")} width="70" alt={props.alt} />
            <h2>{props.h2}</h2>
            <p>{props.p}</p>
        </div>
    );
};

export default Card;