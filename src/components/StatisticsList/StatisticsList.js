import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ title, statisticalData }) => (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <ul className={styles.stat_list}>
      {statisticalData.map(({ id, label, percentage }) => (
        <Statistics key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

StatisticsList.defaultProps = {
  title: '',
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
