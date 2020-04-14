import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
  render() {
        return (
        <div className="menuItem">
            <div className="titleMenu">
                {this.props.title}
            </div>
        </div>
        )
    }
  }

export default MenuItem;
