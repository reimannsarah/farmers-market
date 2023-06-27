import React from 'react';
import './App.css';
import DayControl from './DayControl';
import Header from './Header';
import SeasonControl from './SeasonControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <DayControl />
      <SeasonControl />
    </React.Fragment>
  );
}

export default App;
