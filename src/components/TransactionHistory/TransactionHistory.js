import React from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryItem from '../TransactionHistoryItem/TransactionHistoryItem';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.title}>TYPE</th>
        <th className={styles.title}>AMOUNT</th>
        <th className={styles.title}>CURRENCY</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ type, amount, currency, id }) => (
        <tr key={id}>
          <TransactionHistoryItem
            type={type}
            amount={amount}
            currency={currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
