import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { jobsReducer } from './job';

export default combineReducers({
  auth: authReducer,
  routing: routerReducer,
  jobs: jobsReducer
});
