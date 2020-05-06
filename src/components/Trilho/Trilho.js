import React, { Component } from 'react';
import './Trilho.css';
import VideoItem from './VideoItem/VideoItem';

let animation = false;

class Trilho extends Component {
    state = {
        focusedItemIndex: 0
    }

    handleKeyPress = (event) => {
      if (this.props.scene === 'trilho' && !animation && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
        event.preventDefault();
        this.navigationTrilho(event.keyCode);
      }
    }

    navigationTrilho(keyCode) {
      if (keyCode === 38) //up
        this.goToDestaque();
      else if(keyCode === 39) //right
        this.rightNavigation();
      else if(keyCode === 37) //left
        this.leftNavigation();
    }

    goToDestaque(){
      this.hideTrilho();
      document.getElementById(this.props.lastFocusDestaque).classList.add("focusedItem"); //foca em destaque
      this.props.callback('destaque');
      document.getElementById("bg").style.backgroundImage = "url("+this.props.bgApp+")";
    }

    hideTrilho(){
      document.getElementsByClassName("destaque")[0].style.display = "block";
      document.getElementsByClassName("videoDescription")[0].style.display = "none";
      document.getElementsByClassName("focusVideoItem")[0].style.display = "none";
      document.getElementsByClassName("trilho")[0].style.height = "30%";
      document.getElementsByClassName("containerListVideos")[0].style.height = "100%";
    }

    rightNavigation(){
      const widthVideoItem = this.getWidthVideoItem();
      const element = document.getElementById("listVideos");
      let index = this.state.focusedItemIndex;
      let left = element.offsetLeft;
      
      if(this.state.focusedItemIndex < this.props.videos.length-1) {
        index++;
        left = left - widthVideoItem;
      } else {
        index = 0;
        left = 0;
      }

      this.animateAndSaveIndex(element, left, index);
    }

    animateAndSaveIndex(element, left, index){
      element.style.left = left + "px";

      animation = true;
      setTimeout(() => {
        animation = false;
      }, 300);

      this.setState({
        focusedItemIndex: index,
      });
    }

    leftNavigation(){
      if(this.state.focusedItemIndex > 0) {
        const widthVideoItem = this.getWidthVideoItem();
        const element = document.getElementById("listVideos");
        let index = this.state.focusedItemIndex;
        let left = element.offsetLeft;

        index--;
        left = left + widthVideoItem;
        this.animateAndSaveIndex(element, left, index);
      } else {
        this.goToMenu();
      }      
    }

    goToMenu(){
      document.getElementsByClassName("focusVideoItem")[0].style.display = "none"; //remover foco atual
      document.getElementById("menu").classList.add("is-nav-open"); //expande o menu
      document.getElementsByClassName("menuItem")[this.props.lastFocusMenu].classList.add("focusedItem"); //foca no menu item 
      this.props.callback('menu');
    }

    componentDidMount(){
      const widthVideoItem = this.getWidthVideoItem();
      document.getElementById("listVideos").style.width = (this.props.videos.length * widthVideoItem) + "px";
    }

    getWidthVideoItem(){
      const element = document.getElementById("videoItem");
      const marginVideoItem = parseFloat(window.getComputedStyle(element).marginLeft);
      return element.offsetWidth + marginVideoItem;
    }

    componentDidUpdate() {
      if (this.props.scene === 'trilho'){
        document.getElementById("bg").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("bg").style.backgroundImage = "url("+this.props.videos[this.state.focusedItemIndex].bg+")"; //altera bg do app
          document.getElementById("category").textContent = this.props.videos[this.state.focusedItemIndex].category; //altera o título da categoriax
          document.getElementById("bg").style.opacity = "1";
        }, 500);

        document.addEventListener('keydown', this.handleKeyPress, true);
      }
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }

    render() {
      const listVideos = this.props.videos.map((v, index) => <VideoItem key={index} video={v}/>)

      return (
        <div className="trilho">
          <div className="videoDescription">
            <div>Big Brother Brasil</div>
            <div id="category" className="category"></div>
          </div>
          <div className="containerListVideos">
            <div className="titleListVideos">Agora no BBB</div>
            <div id="listVideos" className="listVideos">{listVideos}</div>
            <div id="focusVideoItem" className="focusVideoItem"></div>
          </div>
        </div>
      )
    }
  }

export default Trilho;