import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const DashboardTable = ({ portfolio }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.header}>ISIN</th>
          <th className={styles.header}>Symbol</th>
          <th className={styles.header}>Name</th>
          <th className={styles.header}>Market value</th>
          <th className={styles.header}>Potential gain</th>
        </tr>
      </thead>
      <tbody>
        {portfolio.map(line => (
          <tr key={line.instrument_isin} className={styles.row}>
            <td className={styles.cell}>{line.instrument_isin}</td>
            <td className={styles.cell}>{line.symbol}</td>
            <td className={styles.cell}>{line.name}</td>
            <td className={`${styles.cell} ${styles.cellValue}`}>
              <strong>{parseFloat(line.market_value, 2).toFixed(2)}€</strong>
            </td>
            <td className={`${styles.cell} ${styles.cellValue}`}>
              <strong>{line.potential_gain}€</strong>
              <br />
              {line.potential_gain_pct}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

DashboardTable.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashboardTable;
