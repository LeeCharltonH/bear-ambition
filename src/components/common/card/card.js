import styles from "./CardStyles.module.scss";

function Card(props){
    const text = props.p;

    return(
        <div className={styles.serviceCard}>
            <img src={require("../../../assets/images/bearIcon.png")} width="70" alt={props.alt} />
            <h2>{props.h2}</h2>
            <div>{text.split('\n').map(str => <p key={Math.random()}>{str}</p>)}</div>
        </div>
    );
};

export default Card;