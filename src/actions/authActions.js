import axios from 'axios';
import setAuthToken from '../util/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER , SET_GUEST_ID} from './types';

// Register User
// creating an instance of axios so that the action hits the node.js server to register / login / authenticate a user
const instance = axios.create({baseURL: 'http://localhost:5000'})
// const instance = axios.create({baseURL: 'http://ansible-lb-1350890422.us-east-2.elb.amazonaws.com'})
export const registerUser = (userData, history) => dispatch => {
  instance
    .post('/users/register', userData) 
    .then(res => history.push('/login')) //after the post has been compeleted send user to login form to log in
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const addGuest = (guestData) => dispatch => {
  instance
    .post('/users/guest', guestData)
    .then(res => {
      const response = res.data;
      dispatch(guestId(response.id));
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data 
      })
    );
};
// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
  instance
    .post('/users/login', userData)
    .then(res => {
      const token = res.data;
      
      // Set token to LocalStorage with the key usertoken
      localStorage.setItem('usertoken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      
      // Set current user
      dispatch(setCurrentUser(decoded));
      
      history.push('/profile')
      console.log("logging in")
      return token;
    })
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data 
      })
    );
};


// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
export const guestId = (data) => {
  return {
    type: SET_GUEST_ID,
    payload: data
  }
}
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  console.log(localStorage);
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
