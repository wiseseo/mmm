import React, { Component } from 'react';
import  './App.css'; 
import Header from './Header';
import './Header.css';
import TotalChart from './TotalChart';
import './TotalChart.css';

class App extends Component {
  render() {

    return (
      <div>
      <Header/>
      <TotalChart/>
      </div>
    );
  }
}

export default App;

