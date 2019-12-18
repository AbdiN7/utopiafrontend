import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookingReducer from './bookingReducer';
import cancelReducer from './cancelReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  booking: bookingReducer,
  cancel: cancelReducer,
  errors: errorReducer
});
