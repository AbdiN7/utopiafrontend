import React from 'react';
import PathForm from './components/PathForm';
import FlightList from './components/FlightList.js'
import FlightDate from './components/FlightDate.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <PathForm/>
      <br></br>
      <FlightDate />
      <br></br>
      <FlightList />
    </div>
  );
}

export default App;
