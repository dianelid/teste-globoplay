import React, { Component } from 'react';
import './Trilho.css';
import VideoItem from './VideoItem/VideoItem';

class Trilho extends Component {
    state = {
        widthVideoItem: 0
    }

    render() {
      const videos = [
        {
            categoria: "sala de estar",
            bg: "blue"
        },
        {
            categoria: "varanda",
            bg: "yellow"
        },
        {
          categoria: "piscina",
          bg: "green"
        },
        {
          categoria: "academia",
          bg: "red"
        },
        {
          categoria: "chuveiro",
          bg: "purple"
        }
      ]

      const final = videos.map((v, index) => <VideoItem key={index} video={v}/>)

      return (
        <div id="trilho" className="trilho">
          <div className="videoDescription">
            <div>Big Brother Brasil</div>
            <div className="category">Piscina</div>
          </div>
          <div className="containerListVideos">
            <div className="titleListVideos">Agora no BBB</div>
            <div id="listVideos" className="listVideos" style={{width: videos.length*this.state.widthVideoItem}}>
                {final}
            </div>
            <div className="focusVideoItem"></div>
          </div>
        </div>
      )
    }

    handleKeyPress = (event) => {
      if (this.props.scene === 'trilho' && (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40)) {
        event.preventDefault();
        this.navigationTrilho(event.keyCode)
        console.log("Trilho: "+event.keyCode);
      }
    }

    navigationTrilho(keyCode) {
      
    }

    componentDidMount(){
        const element = document.getElementById("videoItem");
        const widthVideoItem = element.offsetWidth;
        const marginVideoItem = parseFloat(window.getComputedStyle(element).marginLeft);

        this.setState({
          widthVideoItem: widthVideoItem + marginVideoItem,
        });
    }

    componentDidUpdate() {
      document.addEventListener('keydown', this.handleKeyPress, true);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress, true);
    }
  }

export default Trilho;
