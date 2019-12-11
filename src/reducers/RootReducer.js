import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
// import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  booking: bookingReducer,
  // errors: errorReducer
});
