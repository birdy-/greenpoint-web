import { getPortfolio } from 'api-client/portfolio';

export const PORTFOLIO_RECEIVED = 'PORTFOLIO_RECEIVED';
export const PORTFOLIO_ERROR = 'PORTFOLIO_ERROR';

/** Get all Dashboards */
export const fetchPortfolio = () => dispatch => {
  getPortfolio().then(
    payload => dispatch({ type: PORTFOLIO_RECEIVED, payload }),
    payload => dispatch({ type: PORTFOLIO_ERROR, payload })
  );
};
