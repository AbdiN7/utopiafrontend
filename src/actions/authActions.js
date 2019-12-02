import axios from 'axios';
import setAuthToken from '../util/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
const instance = axios.create({baseURL: 'http://localhost:5000'})
export const registerUser = (userData, history) => dispatch => {
  instance
    .post('/users/register', userData)
    .then(res => history.push('/login'))
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
      console.log(res)
      // Save to localStorage
      const token = res.data;
      console.log(token)
      // Set token to ls
      localStorage.setItem('usertoken', token);
      // Set token to Auth header
      
      console.log(localStorage)
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      
      history.push('/profile')
      console.log("logging in")
      return token;
    })
    .catch(err => console.log(err)
    //   dispatch({
    //     type: GET_ERRORS,
    //     payload: err.response.data 
    //   })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
