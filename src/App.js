
import jwt_decode from 'jwt-decode';
import setAuthToken from './util/setAuthToken';
import { Provider } from 'react-redux';
import store from './store';
import {setCurrentUser, logoutUser} from './actions/authActions';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import home from './components/home';
import BookingList from './components/BookingList'
import AppBarHeader from './components/appBarHeader'
import TicketTable from './components/TicketTable'
import FlightList from './components/FlightList'
import UserForm from './components/UserForm'
import PaymentForm from './components/PaymentForm'
import Payment from './components/Payment'
import './styles/app.scss';
import Profile from './components/auth/Profile';
import { getAirports } from './actions/bookingActions';
import FindBookingForm from './components/FindBookingForm';


if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
 

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = '/login';
  }
}

function App() {
  return (
    <Provider store={store}>

      <Router>
      <AppBarHeader/>
        <Switch>
          <Route exact path='/' component={home}/>
          <Route path='/flightList' component={FlightList}/>
          <Route path='/booking' component={BookingList}/>
          <Route path='/PaymentForm' component={PaymentForm}/>
          <Route path='/flight' component={FindBookingForm}/>
          <Route path='/form' component={UserForm}/>
          <Route path="/profile" component={Profile} />
          <Route path='/payment' component={Payment}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
