import propTypes from "prop-types";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<li className={styles.item}>
        {isOnline ? <span className={styles.statusGreen}>{isOnline}</span> : <span className={styles.statusRed}>{isOnline}</span>}
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>)
}



FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
}


export default FriendListItem;