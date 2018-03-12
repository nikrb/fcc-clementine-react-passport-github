import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  test = () => {
    fetch('/test', {
      method: 'get',
      headers: { 'content-type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(res => res.json())
      .then(json => {
        console.log('test auth route response:', json);
      });
  };
  onClick = e => {
    e.preventDefault();
    window.location.href = 'http://localhost:8080/auth/github';
  };
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
        <button type="button" onClick={this.test} >test</button>
      </div>
    );
  }
}

export default App;
