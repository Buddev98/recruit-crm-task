import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from '../slices/login';
import userDetailsReducer from '../slices/userDetails';

export default combineReducers({
  login: loginReducer,
  userDetails: userDetailsReducer,
});
