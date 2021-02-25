import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <div className={styles.friends}>
    <ul className={styles.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <FriendListItem
          isOnline={isOnline}
          avatar={avatar}
          name={name}
          key={id}
        />
      ))}
    </ul>
  </div>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
