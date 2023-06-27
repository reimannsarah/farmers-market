import React from 'react';
import './App.css';
import DayControl from './DayControl';
import Header from './Header';
import SeasonControl from './SeasonControl';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="main">
        <div className="day result">
          <DayControl />
        </div>
        <div className="season result">
          <SeasonControl />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
