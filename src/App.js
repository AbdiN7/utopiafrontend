import React from 'react';
import FlightList from './components/FlightList.js'
import FlightDate from './components/FlightDate.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        HELLO 2
      </header>
      <FlightDate />
      <br></br>
      <FlightList />
    </div>
  );
}

export default App;
