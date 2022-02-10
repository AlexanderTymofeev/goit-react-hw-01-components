import propTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({username, tag, location, avatar, stats}) => {
  return (<div className={styles.profile}>
    <div className={styles.description}>
    <img
        src={avatar}
        alt="User avatar"
        className={styles.avatar}
    />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
  </div>

    <ul className={styles.stats}>
    <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={styles.label}>Views</span>
      <span className={styles.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={styles.label}>Likes</span>
      <span className={styles.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>)
}

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
  }).isRequired,
   }

export default Profile;