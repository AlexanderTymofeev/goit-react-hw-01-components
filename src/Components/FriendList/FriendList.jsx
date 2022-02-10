import propTypes from "prop-types";
import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";



const FriendList = ({ friends }) => {
    const friendItem = friends.map(friend => (
        <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id} />
    ))
    return (<ul className={styles.friendList}> 
{friendItem}
</ul>)  
}

FriendList.defaultProps = {
    friends: []
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
    }).isRequired).isRequired
        }

export default FriendList;