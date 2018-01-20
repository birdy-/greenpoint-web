import { API_URL } from './constants';

export const getPortfolio = () => {
  return fetch(`${API_URL}/portfolio`)
    .then(res => {
      return res.json();
    })
    .then(yolo => {
      console.log(yolo);
      return yolo;
    })
    .catch(err => {
      throw err;
    });
};
