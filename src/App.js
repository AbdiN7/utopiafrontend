

import React from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './components/home';
import BookingList from './components/BookingList'
import AppBarHeader from './components/appBarHeader'
import FlightList from './components/FlightList'
import queriedTicketList from './components/queriedTicketList'
import PaymentForm  from './components/PaymentForm'
import UserForm from './components/UserForm'
import './styles/app.scss';

function App() {
  return (
    <div>
      <AppBarHeader/>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/queriedTicketList' component={queriedTicketList}/>
        <Route path='/booking' component={BookingList}/>
        <Route path='/PaymentForm' component={PaymentForm}/>
        <Route path='/flight' component={FlightList}/>
        <Route path='/form' component={UserForm}/>
      </Switch>
    </div>

  );
}

export default App;
