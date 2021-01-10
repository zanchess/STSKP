import { combineReducers } from 'redux';

import counter from './reducers/counter';
import totalInfo from './reducers/total';

export default combineReducers({
  counter, totalInfo,
});
