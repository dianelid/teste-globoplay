import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

const classFocused = "focusedItem";

class Menu extends Component {
    state = {
        focusedItemIndex: 1
    }

    render() {
        return (
        <div id="menu" className="menu">
            <div className="line"></div>
            <div className="areaMenu">
                <MenuItem title="Busca"/>
                <MenuItem title="Início"/>
                <MenuItem title="Agora na Globo"/>
                <MenuItem title="Categorias"/>
                <MenuItem title="Minha Conta"/>
            </div>
        </div>
        )
    }

    handleKeyPress = (event) => {
      if (this.props.scene === 'menu' && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
        event.preventDefault();
        this.navigationMenu(event.keyCode);
      }
    }

    navigationMenu(keyCode) {
        const itens = document.getElementsByClassName("menuItem"); //recupera a lista de itens do menu
        itens[this.state.focusedItemIndex].classList.remove(classFocused); //remove o foco atual
        
        if (keyCode === 40 || keyCode === 38 || keyCode === 37){ //down, up ou left
          this.updateIndexItem(itens.length, keyCode); //atualiza o índice para o novo item a ser focado
          itens[this.state.focusedItemIndex].classList.add(classFocused); //foca no novo item de menu
        } else if (keyCode === 39) //right
          this.exitMenu();
    }

    updateIndexItem = (size, keyCode) => {
      let newIndex = this.state.focusedItemIndex;
      
      if(keyCode === 40)
        newIndex = this.state.focusedItemIndex + 1 === size ? 0 : this.state.focusedItemIndex + 1;
      else if(keyCode === 38)
        newIndex = this.state.focusedItemIndex - 1 === -1 ? size-1 : this.state.focusedItemIndex - 1;
      
      if(this.state.focusedItemIndex !== newIndex)
        this.setState({
          focusedItemIndex : newIndex
        })  
    }

    exitMenu() {
      document.getElementById("menu").style.width = '10%'; //recolhe o menu 
      document.removeEventListener('keydown', this.handleKeyPress, true);
      
      this.setState({
        focusedItemIndex : 1 //reset index
      })
      
      if(document.getElementsByClassName("destaque")[0].style.display !== "none") {
        document.getElementById("button1").classList.add(classFocused); //foca em destaque
        this.props.callback('destaque'); 
      } else {
        document.getElementsByClassName("focusVideoItem")[0].style.display = "block"; //foca no trilho
        this.props.callback('trilho');
      }
    }

    componentDidUpdate() {
      document.addEventListener('keydown', this.handleKeyPress, true);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }
  }
  
export default Menu;