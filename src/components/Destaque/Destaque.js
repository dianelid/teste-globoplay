import React, { Component } from 'react';
import './Destaque.css';

class Destaque extends Component {
    render() {
      return (
        <div className="destaque">
          <img className="logoProg" src={this.props.logo} alt=""/>
          <div className="descriptionProg">{this.props.description}</div>
          <div id="button1" className="buttonProg focusedItem">Assista</div>
          <div id="button2" className="buttonProg">Veja mais</div>
        </div>
      )
    }

    componentDidUpdate() {
      if(this.props.scene === 'destaque'){
        const idButton1 = "button1", idButton2 = "button2", classFocused = "focusedItem";

        if (this.props.keyCode === 39){ //right
          this.onFocus(idButton1, idButton2, classFocused);}
        else 
        if (this.props.keyCode === 37) { //left
          if(document.getElementById(idButton1).classList.contains(classFocused)){
            document.getElementById(idButton1).classList.remove(classFocused); //desfoca para focar no menu
            document.getElementById("menu").style.width = '25%'; //expande o menu
            this.props.callback('menu'); //vai para o menu
          }
          else
            this.onFocus(idButton2, idButton1, classFocused);    
        }
      } 
    }

    onFocus(elementUnFocus, elementFocus, classFocused){
      document.getElementById(elementUnFocus).classList.remove(classFocused);
      document.getElementById(elementFocus).classList.add(classFocused);
    }
  }

export default Destaque;