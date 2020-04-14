import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

class Menu extends Component {
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

    componentDidUpdate() {
      if (this.props.scene === 'menu'){
        const classFocused = "focusedItem";
        const itens = document.getElementsByClassName("menuItem"); //recupera a lista de itens do menu
        let index = this.recoverFocusedItem(itens, classFocused); //recupera o índice do item do menu focado no momento
        itens[index].classList.remove(classFocused); //remove o foco atual

        if (this.props.keyCode === 40 || this.props.keyCode === 38 || this.props.keyCode === 37){ //down, up ou left
          index = this.updateIndexItem(itens.length, index); //atualiza o índice para o novo item a ser focado
          itens[index].classList.add(classFocused); //foca no novo item de menu
        } else if (this.props.keyCode === 39){ //right
          document.getElementById("menu").style.width = '10%'; //recolhe o menu 
          this.props.callback('destaque'); //vai para destaque
        }
      } 
    }

    recoverFocusedItem = (itens, classFocused) => {
      for (let i = 0; i < itens.length; i++) {
        if(itens[i].classList.contains(classFocused))
          return i;       
      }

      return 1;
    }

    updateIndexItem = (size, index) => {
      if(this.props.keyCode === 40)
        return index+1 === size ? 0 : index+1;
      else if(this.props.keyCode === 38)
        return index-1 === -1 ? size-1 : index-1;
      return index;
    }
  }
  
export default Menu;