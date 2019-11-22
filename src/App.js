import React from 'react';

import {Switch, Route} from 'react-router-dom';
import home from './components/home';

import SignUp from './components/SignUp';
import BookingList from './components/BookingList'
import AppBarHeader from './components/appBarHeader'
import FlightList from './components/FlightList'
import FlightDate from './components/FlightDate'
import PathForm from './components/PathForm'
import './styles/app.scss';

function App() {
  return (
    <div>
      <AppBarHeader/>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/booking' component={BookingList}/>
        <Route path='/flight' component={FlightList}/>
        <Route path='/date' component={FlightDate}/>
        <Route path='/path' component={PathForm}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
    </div>

  );
}

export default App;
