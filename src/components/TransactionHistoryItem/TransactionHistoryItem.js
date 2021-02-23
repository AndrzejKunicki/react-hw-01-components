import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <>
    <td className={styles.item}>{type}</td>
    <td className={styles.item}>{amount}</td>
    <td className={styles.item}>{currency}</td>
  </>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
