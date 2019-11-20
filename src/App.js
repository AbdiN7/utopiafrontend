import React from 'react';

import {Switch, Route} from 'react-router-dom';
import home from './components/home';
import BookingList from './components/BookingList'
import AppBarHeader from './components/appBarHeader'
function App() {
  return (
    <div className="App">
      <AppBarHeader/>
      <Switch>
        <Route exact path='/' component={home}/>
        <Route path='/booking' component={BookingList}/>
      </Switch>
    </div>

  );
}

export default App;
