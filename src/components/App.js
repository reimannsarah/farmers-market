import React from 'react';
import './App.css';
import DayControl from './DayControl';
import Header from './Header';
import SeasonControl from './SeasonControl';
import lettuce from './../img/lettuce4real.gif';

function App() {
  return (
    <React.Fragment>
      <Header />
      <img src={lettuce} alt="dancing lettuce" className="lettuce"/>
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
