import React from 'react';
import Profile from './components/Profile/Profile';
import StatisticsList from './components/StatisticsList/StatisticsList';
import FriendList from './components/FriendList/FriendList';
import Container from './components/Container/Container';
import user from './user.json';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './global.css';

import transactions from './transactions.json';

const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};

export default App;
