import { API_URL } from './constants';

export const getPortfolio = () =>
  fetch(`${API_URL}/portfolio`)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
