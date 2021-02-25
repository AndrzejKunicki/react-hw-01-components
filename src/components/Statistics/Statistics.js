import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
const Statistics = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
