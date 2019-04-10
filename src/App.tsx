import React, { Component } from 'react';
import Calculator from './components/Calculator'
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Footer />
      </div>
    );
  }
}

export default App;
