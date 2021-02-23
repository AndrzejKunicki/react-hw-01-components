import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.png';

import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="240"
        />
        <p className="name">{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.keys(stats).map((item, i) => {
          let string = item[0].toUpperCase() + item.substring(1);
          return (
            <li key={item} className={styles.statsItem}>
              <span className={styles.label}>{string}</span>
              <span className="quantity">{stats[item]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
