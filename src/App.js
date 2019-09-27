import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock'
import Products from './Products'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.props.name }'s React App
          </p>
          <Clock />
          <Products />
        </header>
      </div>
    );
  }
}

export default App;
