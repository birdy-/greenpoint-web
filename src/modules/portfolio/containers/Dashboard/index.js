import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getModuleState } from 'redux-register-module';

import DashboardTable from '../DashboardTable';
import { fetchPortfolio } from '../../actions';

const mapStateToProps = state => ({
  portfolio: getModuleState('portfolio', state).portfolio,
});

const mapDispatchToProps = dispatch => ({
  getPorfolio: dispatch(fetchPortfolio()),
});

const Dashboard = ({ portfolio }) => {
  if (!portfolio) return null;
  return (
    <div>
      <DashboardTable portfolio={portfolio} />
    </div>
  );
};

Dashboard.propTypes = {
  portfolio: PropTypes.array,
};

Dashboard.defaultProps = {
  portfolio: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
