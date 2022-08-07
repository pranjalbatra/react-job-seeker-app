import { combineReducers } from 'redux';

import { alert } from './alert';
import { sidebar } from './sidebar';
import { searchResult } from './searchResult';
import { candidate } from './candidate';

const rootReducer = combineReducers({
  alert,
  sidebar,
  searchResult,
  candidate
});

export default rootReducer;