import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

{
  /* <ul className={s.friendList}>
  {friends.map(({ avatar, name, id, isOnline }) => (
    <FriendListItem
      key={id}
      className={s.friendItem}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
    />
  ))}
</ul>; */
}

const FriendList = ({ friends }) => (
  <div className={styles.friends}>
    <ul className={styles.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li className={styles.item} key={id}>
          <FriendListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            id={id}
          />
        </li>
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
