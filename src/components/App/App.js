import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu/Menu';
import Destaque from '../Destaque/Destaque';
import Trilho from '../Trilho/Trilho';

class App extends Component {
  state = {
    focusedScene: "destaque",
    lastFocusDestaque: '',
    lastFocusMenu: 1,
    bgApp: "https://s2.glbimg.com/1liph2qog-AGmgGI0hXMckn_Yb4=/0x720/https://s2.glbimg.com/T7K_c4W_to0gJiNRgJIBpJVBf2I=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2020/u/a/WCTZoCS3ulpaPbztyTlw/2020-748-realities-big-brother-brasil-20-tv-globo-background.jpg",
    logo: "https://logodownload.org/wp-content/uploads/2018/04/bbb-logo-big-brother-brasil-logo-16.png",
    textDescription: "Acompanhe 24h ao vivo a casa mais vigiada do Brasil",
    videos: [
      {
          category: "sala de estar",
          bg: "http://ohoje.com/public/imagens/fotos/amp/6f9b95048fe1e9db9b37cf5c9abf5815.jpg"
      },
      {
        category: "academia",
        bg: "http://ohoje.com/public/imagens/fotos/amp/821b16ac92dafe68c9c49c536a99664d.jpg"
      },
      {
        category: "chuveiro",
        bg: "http://ohoje.com/public/imagens/fotos/amp/8c0436f3dd10fc86b966c456069a649b.jpg"
      },
      {
          category: "varanda",
          bg: "http://www.ohoje.com/public/imagens/fotos/amp/e2d6b5f3dedf827825531f160eb1428d.jpg"
      },
      {
        category: "piscina",
        bg: "http://rotanews176.com.br/wp-content/uploads/2019/01/1-123.jpg"
      }
    ]
  }
  
  updateScene(scene) {
    if(this.state.focusedScene !== scene)
      this.setState({
        focusedScene : scene
      })
  }

  updateLastFocusDestaque(buttonFocus) {
      this.setState({
        lastFocusDestaque : buttonFocus
      })
  }

  updateLastFocusMenu(menuItemFocus) {
    this.setState({
      lastFocusMenu : menuItemFocus
    })
}

componentDidUpdate(prevProps, prevState){
  if(prevState.focusedScene !== this.state.focusedScene)
  console.log(this.state.focusedScene);
}

  render() {
    return (
      <div id="app" className="app">
        <div id="bg" className="bg" style={{backgroundImage: "url("+this.state.bgApp+")"}}></div> 
        <div className="titleApp">globoplay</div>
        <Destaque logo={this.state.logo} description={this.state.textDescription} scene={this.state.focusedScene} callback={this.updateScene.bind(this)} updateLastFocus={this.updateLastFocusDestaque.bind(this)} lastFocusMenu={this.state.lastFocusMenu}/>
        <Trilho videos={this.state.videos} bgApp={this.state.bgApp} scene={this.state.focusedScene} callback={this.updateScene.bind(this)} lastFocusDestaque={this.state.lastFocusDestaque} lastFocusMenu={this.state.lastFocusMenu}/>
        <Menu scene={this.state.focusedScene} lastFocusDestaque={this.state.lastFocusDestaque} callback={this.updateScene.bind(this)} updateLastFocus={this.updateLastFocusMenu.bind(this)}/>
      </div>
    )
  }
}

export default App;