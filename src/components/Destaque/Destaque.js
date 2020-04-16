import React, { Component } from 'react';
import './Destaque.css';

const idButton1 = "button1", idButton2 = "button2", classFocused = "focusedItem";

class Destaque extends Component {
    handleKeyPress = (event) => {
      if (this.props.scene === 'destaque' && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
        event.preventDefault();
        this.navigationDestaque(event.keyCode);
      }
    }
 
    navigationDestaque(keyCode){
        if (keyCode === 39) //right
          this.onFocus(idButton1, idButton2); //foca no botão 2
        else if (keyCode === 37) { //left
          if(!document.getElementById(idButton1).classList.contains(classFocused))
            this.onFocus(idButton2, idButton1); //foca no botão 1   
          else
            this.goToMenu(); //foca no menu
        } else if(keyCode === 40) //down
            this.goToTrilho();
    }

    onFocus(elementUnFocus, elementFocus){
      document.getElementById(elementUnFocus).classList.remove(classFocused);
      document.getElementById(elementFocus).classList.add(classFocused);
    }

    goToMenu(){
      this.focusOnMenu();
      this.props.callback('menu'); //vai para o menu
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }

    focusOnMenu(){
      document.getElementById(idButton1).classList.remove(classFocused); //remove o foco atual
      document.getElementById("menu").classList.add("is-nav-open"); //expande o menu
      document.getElementsByClassName("menuItem")[1].classList.add(classFocused); //foca no menu item 2
    }

    goToTrilho(){
      this.expandTrilho();
      document.getElementById(idButton2).classList.remove(classFocused); //remove o foco atual
      this.props.callback('trilho'); //vai para o trilho
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }

    expandTrilho(){
      document.getElementsByClassName("destaque")[0].style.display = "none";
      document.getElementsByClassName("videoDescription")[0].style.display = "block";
      document.getElementsByClassName("focusVideoItem")[0].style.display = "block";
      document.getElementsByClassName("trilho")[0].style.height = "100%";
      document.getElementsByClassName("containerListVideos")[0].style.height = "50%";
    }

    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress, true);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }

    componentDidUpdate() {
      document.addEventListener('keydown', this.handleKeyPress, true);
    }

    render() {
      return (
        <div className="destaque">
          <img className="logoProg" src={this.props.logo} alt=""/>
          <div className="descriptionProg">{this.props.description}</div>
          <div id={idButton1} className="buttonProg focusedItem">Assista</div>
          <div id={idButton2} className="buttonProg">Veja mais</div>
        </div>
      )
    }
  }

export default Destaque;