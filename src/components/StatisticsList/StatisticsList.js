import React from 'react';
import Statistics from '../Statistics/Statistics';
import PropTypes from 'prop-types';
import statisticalData from '../../statistical-data.json';

import styles from './StatisticsList.module.css';

const StatisticsList = ({ title }) => (
  <section className={styles.statistics}>
    {title && <h2 className="title">{title}</h2>}
    <Statistics stats={statisticalData} />
  </section>
);

StatisticsList.defaultProps = {
  title: '',
};

StatisticsList.propTypes = {
  title: PropTypes.string,
};

export default StatisticsList;
