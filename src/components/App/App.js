import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Destaque from '../Destaque/Destaque';
import Trilho from '../Trilho/Trilho';

class App extends Component {
  state = {
    key: null,
    focusedScene: 'destaque'
  }
  
  updateScene(scene) {
    if(this.state.focusedScene !== scene)
      this.setState({
        focusedScene : scene
      })
      console.log("Scene: "+scene);
      console.log("AKII: "+this.state.focusedScene);
  }

  handleKeyPress = (event) => {
    if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
      event.preventDefault();
      this.setState({
        key: event.keyCode,
      })
    }
	}

  render() {
    const logo = "https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-16.png";
    const textDescription = "Acompanhe 24h ao vivo a casa mais vigiada do Brasil";

    return (
      <div className="app">
        <div className="logoApp">globoplay</div>
        <Destaque logo={logo} description={textDescription} keyCode={this.state.key} scene={this.state.focusedScene} callback={this.updateScene.bind(this)}/>
        <Trilho/>
        <Menu keyCode={this.state.key} scene={this.state.focusedScene} callback={this.updateScene.bind(this)}/>
      </div>
    )
    }

    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress, true);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
}

export default App;