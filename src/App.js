import React from 'react';

import {Switch, Route} from 'react-router-dom';
import home from './components/home';
import BookingList from './components/BookingList'
import AppBarHeader from './components/appBarHeader'
import FlightList from './components/FlightList'
import FlightDate from './components/FlightDate'
import PathForm from './components/PathForm'
import './styles/app.scss';
function App() {
  return (
    <div className="App">
      <AppBarHeader/>
      <Switch>

        <Route exact path='/' component={home}/>
        <Route path='/booking' component={BookingList}/>
        <Route path='/flight' component={FlightList}/>
        <Route path='/date' component={FlightDate}/>
        <Route path='/path' component={PathForm}/>
      </Switch>
    </div>

  );
}

export default App;
