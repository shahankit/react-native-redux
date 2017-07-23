import { combineReducers } from 'redux';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import nav from './nav';

// Combine all
export default combineReducers({
  nav
});
