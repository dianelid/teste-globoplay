import React, { Component } from 'react';
import './Menu.css';
import MenuItem from './MenuItem/MenuItem';

class Menu extends Component {
  render() {
        return (
        <div className="menu">
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
  }

export default Menu;
