import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Destaque from '../Destaque/Destaque';
import Trilho from '../Trilho/Trilho';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Destaque/>
        <Trilho/>
        <Menu/>
      </div>
    )
    }
  }

export default App;
