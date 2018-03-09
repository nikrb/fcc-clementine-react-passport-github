import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  onClick = e => {
    e.preventDefault();
    fetch('/auth/github')
      .then(res => res.json())
      .then(json => {
        console.log('auth github response:', json);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <a href="#" onClick={this.onClick}>Login with github</a>
        </p>
      </div>
    );
  }
}

export default App;
