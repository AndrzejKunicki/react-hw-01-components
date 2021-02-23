import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ stats }) => (
  <ul className={styles.stat_list}>
    {stats.map(({ id, label, percentage }) => (
      <li
        className={styles.item}
        style={{ backgroundColor: randomColor() }}
        key={id}
      >
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    ))}
  </ul>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
