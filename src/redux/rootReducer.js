import { combineReducers } from 'redux';
import counter from './reducers/counter';
import statsInfo from './reducers/stats';
import totalInfo from './reducers/total';

export default combineReducers({
  counter, totalInfo, statsInfo,
});
