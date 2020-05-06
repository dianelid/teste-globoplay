import React, { Component } from 'react';
import './Destaque.css';

const idButton1 = "button1", idButton2 = "button2";
let lastButtonFocused = idButton1;

class Destaque extends Component {
    state = {
      button1Focused: true,
      button2Focused: false
    }

    handleKeyPress = (event) => {
      if (this.props.scene === 'destaque' && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
        event.preventDefault();
        this.navigationDestaque(event.keyCode);
      }
    }
 
    navigationDestaque(keyCode){
        if (keyCode === 39){ //right
          this.onFocus(false, true, idButton2); //foca no botão 2
        } else if (keyCode === 37) { //left
          if(!this.state.button1Focused)
            this.onFocus(true, false, idButton1); //foca no botão 1   
          else
            this.goToMenu(); //foca no menu
        } else if(keyCode === 40) //down
            this.goToTrilho();
    }

    onFocus(actionButton1, actionButton2, focusButton){
      this.setState({
        button1Focused : actionButton1,
        button2Focused: actionButton2
      })

      lastButtonFocused = focusButton;
    }

    goToMenu(){
      document.getElementById("menu").classList.add("is-nav-open"); //expande o menu
      document.getElementsByClassName("menuItem")[this.props.lastFocusMenu].classList.add("focusedItem"); //foca no menu item  
      this.exitDestaqueScene('menu');
    }

    exitDestaqueScene(toScene){
      this.setState({ //remove o foco atual
        button1Focused : false, 
        button2Focused : false,
      })

      this.props.callback(toScene); //muda a cena
      this.props.updateLastFocus(lastButtonFocused);
    }

    goToTrilho(){
      this.expandTrilho();
      this.exitDestaqueScene('trilho');
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

    componentDidUpdate(prevProps) {
      if(prevProps.scene !== this.props.scene && this.props.scene === 'destaque'){
        document.addEventListener('keydown', this.handleKeyPress, true);  
        this.setState({ //foca no último botão focado
          button1Focused : lastButtonFocused === idButton1, 
          button2Focused : lastButtonFocused === idButton2,
        })
      }
      //else
        //document.removeEventListener('keydown', this.handleKeyPress, true);
    }

    render() {
      return (
        <div className="destaque">
          <img className="logoProg" src={this.props.logo} alt=""/>
          <div className="descriptionProg">{this.props.description}</div>
          <div id={idButton1} className={this.state.button1Focused ? 'buttonProg focusedItem' : 'buttonProg'}>Assista</div>
          <div id={idButton2} className={this.state.button2Focused ? 'buttonProg focusedItem' : 'buttonProg'}>Veja mais</div>
        </div>
      )
    }
  }

export default Destaque;