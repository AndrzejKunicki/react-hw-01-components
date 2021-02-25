import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.png';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <li className={styles.item}>
    <span
      className={styles.isOnline}
      style={{ backgroundColor: isOnline ? 'green' : 'red' }}
    ></span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
