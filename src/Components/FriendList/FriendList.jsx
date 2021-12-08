import propTypes from "prop-types";
import styles from "./FriendList.module.css";



const FriendList = ({friends}) => {
    return (<ul className={styles.friendList}> {friends.map(friend =>
    (<li className={styles.item}>
        {friend.isOnline ? <span className={styles.statusGreen}>{friend.isOnline}</span> : <span className={styles.statusRed}>{friend.isOnline}</span>}
        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{friend.name}</p>
    </li>))}

</ul>)
}
FriendList.propTypes = {
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool,
    }

export default FriendList;



