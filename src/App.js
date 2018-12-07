import React, { Component } from 'react';
import './App.css';
import Home from '../src/Component/Home';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" ></link>
        <Home></Home>
      </div>
    );
  }
}

export default App;