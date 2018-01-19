import { registerModuleReducer } from 'redux-register-module';
import reducers from './reducers';

export { default } from './containers/Dashboard';

export const registerPortfolio = () => {
  registerModuleReducer('portfolio', reducers);
};
