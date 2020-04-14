import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Destaque from '../Destaque/Destaque';
import Trilho from '../Trilho/Trilho';

class App extends Component {
  render() {
    const logo = "https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-16.png";
    const textDescription = "Acompanhe 24h ao vivo a casa mais vigiada do Brasil";

    return (
      <div className="app">
        <Destaque logo={logo} description={textDescription}/>
        <Trilho/>
        <Menu/>
      </div>
    )
    }
  }

export default App;
