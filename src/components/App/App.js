import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Destaque from '../Destaque/Destaque';
import Trilho from '../Trilho/Trilho';

class App extends Component {
  state = {
    focusedScene: 'destaque'
  }
  
  updateScene(scene) {
    if(this.state.focusedScene !== scene)
      this.setState({
        focusedScene : scene
      })
  }

  render() {
    const logo = "https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-16.png";
    const textDescription = "Acompanhe 24h ao vivo a casa mais vigiada do Brasil";

    return (
      <div className="app">
        <div className="logoApp">globoplay</div>
        <Destaque logo={logo} description={textDescription} scene={this.state.focusedScene} callback={this.updateScene.bind(this)}/>
        <Trilho/>
        <Menu scene={this.state.focusedScene} callback={this.updateScene.bind(this)}/>
      </div>
    )
  }
}

export default App;