import React, { Component } from 'react';
import './Trilho.css';
import VideoItem from './VideoItem/VideoItem';

let animation = false;

class Trilho extends Component {
    state = {
        focusedItemIndex: 0
    }

    render() {
      const final = this.props.videos.map((v, index) => <VideoItem key={index} video={v}/>)

      return (
        <div className="trilho">
          <div className="videoDescription">
            <div>Big Brother Brasil</div>
            <div id="category" className="category"></div>
          </div>
          <div className="containerListVideos">
            <div className="titleListVideos">Agora no BBB</div>
            <div id="listVideos" className="listVideos">
                {final}
            </div>
            <div id="focusVideoItem" className="focusVideoItem"></div>
          </div>
        </div>
      )
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
      document.getElementById("button1").classList.add("focusedItem"); //foca em destaque
      this.props.callback('destaque');
      document.getElementById("app").style.backgroundImage = "url("+this.props.bgApp+")";
      document.removeEventListener('keydown', this.handleKeyPress, true);
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

      this.setState({
        focusedItemIndex: index,
      });

      this.rightAnimation(element, left);
    }

    rightAnimation(element, left){console.log(animation);
      if(!animation){
        animation = true;
        let leftAnimation = element.offsetLeft;
        let animate = setInterval(function(){
            if(leftAnimation > left) {
              leftAnimation -= 9;
              element.style.left = leftAnimation + "px";
            } else {
              clearInterval(animate);
              animation = false;
            }
        }, 5);
      }
    }

    leftNavigation(){
      if(this.state.focusedItemIndex > 0) {
        const widthVideoItem = this.getWidthVideoItem();
        const element = document.getElementById("listVideos");
        let index = this.state.focusedItemIndex;
        let left = element.offsetLeft;

        index--;
        left = left + widthVideoItem;
        this.leftAnimation(element, left);

        this.setState({
          focusedItemIndex: index,
        });
      } else {
        this.goToMenu();
      }      
    }

    leftAnimation(element, left){
      if(!animation){
        animation = true;
        let leftAnimation = element.offsetLeft;
        let animate = setInterval(function(){
          if(leftAnimation < left) {
            leftAnimation += 9;
            element.style.left = leftAnimation + "px";
          } else {
            clearInterval(animate);
            animation = false;
          }
        }, 5);
      }
    }

    goToMenu(){
      document.getElementsByClassName("focusVideoItem")[0].style.display = "none"; //remover foco atual
      document.getElementById("menu").style.width = '25%'; //expande o menu
      document.getElementsByClassName("menuItem")[1].classList.add("focusedItem"); //foca no menu item 2
      this.props.callback('menu');
      document.removeEventListener('keydown', this.handleKeyPress, true);
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
      document.getElementById("app").style.backgroundImage = "url("+this.props.videos[this.state.focusedItemIndex].bg+")";
      document.getElementById("category").textContent = this.props.videos[this.state.focusedItemIndex].category;
      document.addEventListener('keydown', this.handleKeyPress, true);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }
  }

export default Trilho;