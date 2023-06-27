import React from "react";
import logo from './../img/logo.png';

function Header(){
  return (
    <div className="header">
      <img src={logo} alt="farm logo"/>
      <h1>Salad's Sons Acres and Dead Goats</h1>
    </div>
  );
}

export default Header;